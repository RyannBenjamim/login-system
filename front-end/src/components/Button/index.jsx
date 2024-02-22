import * as S from "./styles";

const Button = ({ text, onClick }) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};

export default Button;
