import React from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
  width: 100%;
  height: 35px;
  background-color: ${props => props.theme.colors.backgroundprimary};
  border-radius: 10px;
  color: ${props => props.theme.colors.iconinactive};
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
`;

export default function SelectField() {
  return (
    <Select className="ui dropdown">
      <option>Essen</option>
      <option>Transport</option>
      <option>Flüge</option>
      <option>Hotel</option>
      <option>Party</option>
      <option>Einkauf</option>
      <option>Freizeit</option>
      <option>Sonstiges</option>
    </Select>
  );
}
