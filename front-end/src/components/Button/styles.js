import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 20px;
  outline: none;
  border: none;
  color: #1b4856;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  background-color: #0df5e3;
  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: 0.5s;

  &:hover {
    opacity: 0.6;
  }
`;
