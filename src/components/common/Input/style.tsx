import styled from "styled-components";
import ErrorMessage from "../ErrorMessage";

const Label = styled.label`
  align-self: flex-start;
  margin-left: 40px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 330px;
  height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  border: none;
  background-color: var(--color-type-04);
  font-size: 1.6rem;
`;

const InputErrorMessage = styled(ErrorMessage)`
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const S = {
  Label,
  Input,
  InputErrorMessage,
};
