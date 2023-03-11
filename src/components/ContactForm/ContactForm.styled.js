import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  font-size: 26px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
`;

export const Input = styled.input`
  font-size: 24px;
  border-radius: 6px;
  padding: 6px 10px;
`;

export const Button = styled.button`
  font-size: 26px;
  font-weight: 700;
  border-radius: 6px;
  padding: 8px 10px;
  background-color: lightgreen;
  max-width: 200px;
  margin-top: 50px;
  cursor: pointer;
  box-shadow: 2px 3px 5px black;
  transition: background-color 200ms linear, box-shadow 200ms linear;

  &:hover {
    background-color: green;
  }
  &:active {
    box-shadow: 1px 1px 1px black;
  }
`;
