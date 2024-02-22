import * as S from "./styles";

const ErrorMessage = ({ text }) => {
  return <S.Container text={text}>{text}</S.Container>;
};

export default ErrorMessage;
