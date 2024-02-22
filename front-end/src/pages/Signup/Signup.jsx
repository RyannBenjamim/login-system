import * as S from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ErrorMessage from "../../components/ErrorMessage";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Title from "../../components/Title";
import Subtitle from "../../components/Subtitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUseful } from "../../hooks/useUseful";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { successToast, errorToast } = useUseful();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/register", {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      successToast("Account created successfully.", "#201a30");

      navigate("/");
    } catch (error) {
      errorToast(error.response.data.message, "#201a30");
      setError(error.response.data.message);
    }
  };

  return (
    <S.Container>
      <Title text="Crie sua conta" color="#f4f4f4" size="1.8rem" />
      <Subtitle
        text="Preencha os campos de entrada para se cadastrar"
        color="#83808c"
        size="0.9rem"
        marginTop="10px"
      />
      <S.Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          placeholder="Digite seu nome de usuário"
          onChange={(e) => setUsername(e.target.value)}
          children={<FaUser />}
        />
        <Input
          type="email"
          value={email}
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          children={<FaEnvelope />}
        />
        <Input
          type="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          children={<FaLock />}
        />
        <Input
          type="password"
          value={confirmPassword}
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          children={<FaLock />}
        />
        <ErrorMessage text={error} />
        <Button text="Inscrever-se" />
        <Subtitle
          text="já tem uma conta?"
          size="0.9rem"
          color="#83808c"
          linkText="Entre"
          pathLink="/"
        />
      </S.Form>
    </S.Container>
  );
};

export default Signup;
