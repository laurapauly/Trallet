import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';

const Select = styled.select`
  width: 100%;
  height: 35px;
  background-color: ${light.colors.backgroundprimary};
  border-radius: 10px;
  color: ${light.colors.iconinactive};
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 5px;
  margin: 5px;
  margin-bottom: 10px;
`;

export default function SelectField() {
  return (
    <Select class="ui dropdown">
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
