import * as S from "./styles";

const Title = ({ text, color, size, marginTop, marginBottom, center }) => {
  return (
    <S.Title
      textColor={color}
      fontSize={size}
      marginTop={marginTop}
      marginBottom={marginBottom}
      center={center}
    >
      {text}
    </S.Title>
  );
};

export default Title;
