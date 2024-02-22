import * as S from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import ErrorMessage from "../../components/ErrorMessage";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUseful } from "../../hooks/useUseful";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { successToast, errorToast } = useUseful();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post("http://localhost:3000/api/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("user_token", JSON.stringify(user.data.token));

      successToast("Login successfully.", "#201a30");

      navigate("/home");
    } catch (error) {
      errorToast(error.response.data.message, "#201a30");
      setError(error.response.data.message);
    }
  };

  const hasToken = () => {
    const token = localStorage.getItem("user_token");

    if (!token) return false;

    return true;
  };

  useEffect(() => {
    const user = hasToken();
    if (user) {
      navigate("/home");
    }
  }, []);

  return (
    <S.Container>
      <Title text="Login" color="#f4f4f4" size="1.8rem" />
      <Subtitle
        text="Faça login para continuar"
        color="#83808c"
        size="0.9rem"
        marginTop="10px"
      />
      <S.Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          placeholder="Digite o seu E-mail"
          onChange={(e) => setEmail(e.target.value)}
          children={<FaEnvelope />}
        />
        <Input
          type="password"
          value={password}
          placeholder="Digite a sua senha"
          onChange={(e) => setPassword(e.target.value)}
          children={<FaLock />}
        />
        <ErrorMessage text={error} />
        <Button text="Entrar" />
        <Subtitle
          text="Não tem uma conta?"
          size="0.9rem"
          color="#83808c"
          linkText="Registre-se"
          pathLink="/signup"
        />
      </S.Form>
    </S.Container>
  );
};

export default Signin;
