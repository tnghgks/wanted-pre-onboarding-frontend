import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  max-width: 600px;
  min-height: 630px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: var(--accent-color);
  padding-right: 20px;
  align-items: center;
`;
const Title = styled.h2`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: white;
  font-family: "LINESeedKR-Bd";
  font-size: 2rem;
`;

const TodoContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const S = {
  Container,
  Header,
  Title,
  TodoContainer,
};
