import styled from "styled-components";

const Container = styled.ul`
  height: 100%;
  max-height: 630px;
  overflow-y: auto;
`;
const TodoItem = styled.li`
  display: flex;
  height: 25px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  font-size: 2rem;
  font-family: "KyoboHand";
  margin-bottom: 20px;
  padding-bottom: 5px;
  justify-content: space-between;
  align-items: center;

  label {
    display: flex;
    flex-basis: auto;
    max-width: 85%;
  }
`;

const TodoText = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const S = {
  Container,
  TodoItem,
  TodoText,
  ButtonContainer,
};
