import styled from "styled-components";

const Container = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
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

export const S = {
  Container,
  Title,
};
