import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.textColor || "black"};
  font-size: ${(props) => props.fontSize || "2rem"};
  text-align: ${(props) => props.center || "start"};
`;
