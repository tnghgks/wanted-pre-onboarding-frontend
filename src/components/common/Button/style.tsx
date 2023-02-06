import styled from "styled-components";

interface Props {
  theme: string;
}

const Button = styled.button`
  border: none;
  width: 120px;
  height: 30px;
  border-radius: 5px;
  background-color: var(${(props: Props) => (props.theme === "red" ? "--accent-color" : "--color-type-04")});
  color: ${(props: Props) => (props.theme === "red" ? "white" : "black")};
  font-size: 2rem;
  cursor: pointer;
`;

export const S = { Button };
