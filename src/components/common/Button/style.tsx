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
  background-color: var(${(props: Props) => (props.disabled ? "#88304E" : props.bgColor)});
  color: ${(props: Props) => (props.disabled ? "#555555" : props.txtColor)};
  font-size: 2rem;
  cursor: pointer;
`;

export const S = { Button };
