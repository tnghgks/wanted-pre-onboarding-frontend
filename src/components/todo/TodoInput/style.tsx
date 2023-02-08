import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
`;
const Button = styled.button`
  position: absolute;
  left: 5px;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
    transition: 0.3s;
  }
  img:hover {
    transform: scale(1.2);
  }
`;

const Input = styled.input`
  flex-basis: 100%;
  height: 23px;
  font-size: 2rem;
  padding-left: 36px;
  font-family: "KyoboHand";
  border: none;
  border-radius: 5px;
  background-color: #d9d9d9;
`;
export const S = {
  Container,
  Button,
  Input,
};
