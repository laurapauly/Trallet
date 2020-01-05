import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button`
  background-color: ${props => props.theme.colors.backgroundprimary};
  border-radius: 10px;
  outline: none;
  border: none;
  text-align: center;
  height: 35px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SpendingButton({ children, onClick }) {
  function localOnClick(event) {
    event.preventDefault();
    onClick();
  }
  return <Button onClick={localOnClick}>{children}</Button>;
}
