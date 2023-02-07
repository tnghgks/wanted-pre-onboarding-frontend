import styled from "styled-components";

const Container = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  background-color: var(--color-type-01);
`;

const Title = styled.h2`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: white;
  font-family: "LINESeedKR-Bd";
  background-color: var(--accent-color);
  font-size: 2rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  input {
    width: 330px;
    height: 40px;
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    background-color: var(--color-type-04);
    font-size: 2rem;
  }

  button {
    margin-top: 20px;
  }
`;

export const S = {
  Container,
  Title,
  FormContainer,
};
