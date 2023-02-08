import styled from "styled-components";
import { Link } from "react-router-dom";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 20px;

  button {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const RegisterLink = styled(Link)`
  color: var(--bg-color);
`;

export const S = {
  FormContainer,
  RegisterLink,
};
