import * as S from "./styles";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Input = ({ type, value, placeholder, onChange, children }) => {
  return (
    <S.Container>
      {children}
      <S.Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default Input;
