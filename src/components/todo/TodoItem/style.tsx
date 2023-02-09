import styled from "styled-components";

const Container = styled.li`
  width: 100%;
  display: flex;
  height: 25px;
  box-sizing: content-box;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  font-size: 2rem;
  font-family: "KyoboHand";
  margin-bottom: 20px;
  padding-bottom: 1px;
  justify-content: space-between;
  align-items: center;

  label {
    width: 100%;
    display: flex;
    flex-basis: auto;
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
const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ModifyInput = styled.input`
  flex-basis: 100%;
  height: 20px;
  font-size: 2rem;
  font-family: "KyoboHand";
  border: none;
  border-radius: 5px;
  background-color: #d9d9d9;
  margin-left: 10px;
`;

export const S = {
  Container,
  TodoText,
  ButtonContainer,
  Form,
  ModifyInput,
};
