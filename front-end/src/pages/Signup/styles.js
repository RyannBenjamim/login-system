import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  padding: 30px;
  background-color: #201a30;
  border-radius: 15px;

  @media (max-width: 500px) {
    width: 350px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;
