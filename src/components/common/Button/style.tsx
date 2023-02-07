import styled from "styled-components";

interface Props {
  bgColor?: string;
  txtColor?: string;
  disabled?: boolean;
}

const Button = styled.button`
  border: none;
  min-width: 120px;
  padding: 5px 10px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: Props) => (props.disabled ? "#aaa" : `var(${props.bgColor})`)};
  color: ${(props: Props) => (props.disabled ? `#444` : props.txtColor)};
  font-size: 2rem;
  cursor: pointer;
`;

export const S = { Button };
