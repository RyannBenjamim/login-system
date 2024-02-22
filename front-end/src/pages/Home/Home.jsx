import * as S from "./styles";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUseful } from "../../hooks/useUseful";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState([]);
  const { formatDate, infoToast } = useUseful();
  const navigate = useNavigate();

  const exit = () => {
    localStorage.removeItem("user_token");
    infoToast("Thank you for using our service.", "#201a30");
    navigate("/");
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem("user_token");
      const user = await axios.post("http://localhost:3000/api/user", {
        token: JSON.parse(token),
      });
      setUser(user.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <S.Container>
      <Title
        text="Você está conectado ao sistema"
        color="#f4f4f4"
        size="1.8rem"
        center="center"
      />
      <Subtitle
        text={`Seja bem-vindo(a), ${user.username}!`}
        color="#f4f4f4"
        size="1.2rem"
        marginTop="15px"
        marginBottom="20px"
        center="center"
      />
      <Subtitle
        text={`Seu email é ${user.email}`}
        color="#f4f4f4"
        size="1.2rem"
        marginTop="15px"
        marginBottom="20px"
        center="center"
      />
      <Subtitle
        text={`Sua conta foi criada em ${formatDate(user.createdAt)}`}
        color="#f4f4f4"
        size="1.2rem"
        marginTop="15px"
        marginBottom="20px"
        center="center"
      />
      <Button text="Sair" onClick={exit} />
    </S.Container>
  );
};

export default Home;
