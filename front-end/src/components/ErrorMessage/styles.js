import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.text ? "block" : "none")};
  padding: 10px;
  color: #da4b4e;
  background-color: #ffdce0;
  border-radius: 8px;
  border: 1px solid #fdaeb7;
`;
