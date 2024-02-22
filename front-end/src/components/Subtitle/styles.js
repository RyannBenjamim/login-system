import styled from "styled-components";

export const Subtitle = styled.p`
  color: ${(props) => props.textColor || "black"};
  font-size: ${(props) => props.fontSize || "1.5rem"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  text-align: ${(props) => props.center || "start"};
`;

export const Strong = styled.strong`
  text-decoration: none;

  a {
    text-decoration: none;
    color: ${(props) => props.colorLink || "#0DF5E3"};
    cursor: pointer;
  }
`;
