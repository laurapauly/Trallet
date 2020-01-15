import React from 'react';
import styled from '@emotion/styled';
import categories from '../categories/categories';
import PropTypes from 'prop-types';

const Select = styled.select`
  width: 100%;
  height: 35px;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  border-radius: 10px;
  color: ${props => props.theme.colors.iconInactive};
  outline: none;
  border: none;
  font-size: 10px;
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
`;

export default function CategoriesSelectField({ onChange }) {
  return (
    <Select onChange={onChange}>
      <option value={''}>Alle</option>
      {categories.map(category => (
        <option key={category.value} value={category.value}>
          {category.title}
        </option>
      ))}
      ;
    </Select>
  );
}

CategoriesSelectField.propTypes = {
  onChange: PropTypes.func
};
