import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 30px;
`;

export const Item = styled.li`
  min-width: 600px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 6px;
  padding: 6px 10px;
  display: flex;
  background-color: lightgray;
  box-shadow: 2px 3px 5px black;
  justify-content: space-between;
  align-items: center;
`;

export const DelButton = styled.button`
  font-size: 26px;
  font-weight: 700;
  border-radius: 6px;
  padding: 8px 10px;
  background-color: lightcoral;
  max-width: 200px;
  cursor: pointer;
  box-shadow: 2px 3px 5px black;
  transition: background-color 200ms linear, box-shadow 200ms linear;

  &:hover {
    background-color: brown;
  }
  &:active {
    box-shadow: 1px 1px 1px black;
  }
`;
