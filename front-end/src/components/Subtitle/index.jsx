import * as S from "./styles";
import { Link } from "react-router-dom";

const Subtitle = ({
  text,
  color,
  size,
  marginTop,
  marginBottom,
  linkText,
  pathLink,
  center,
}) => {
  return (
    <S.Subtitle
      fontSize={size}
      textColor={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
      center={center}
    >
      {text}
      {linkText && (
        <S.Strong>
          <Link to={pathLink}>&nbsp;{linkText}</Link>
        </S.Strong>
      )}
    </S.Subtitle>
  );
};

export default Subtitle;
