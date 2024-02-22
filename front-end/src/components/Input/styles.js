import styled from "styled-components";

export const Input = styled.input`
  height: 30px;
  border-radius: 8px;
  background-color: transparent;
  outline: none;
  border: none;
  color: #f4f4f4;
`;

export const Container = styled.div`
  background-color: #38304c;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  color: #f4f4f4;
  opacity: 1;

  &:hover {
    opacity: 0.9;
  }
`;
