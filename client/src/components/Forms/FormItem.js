import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const Div = styled.div``;

const Label = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.fontSecondary};
`;

export default function FormItem({ label, children, style }) {
  return (
    <Div style={style}>
      <Label>{label}</Label>
      {children}
    </Div>
  );
}

FormItem.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object,
  label: PropTypes.string
};
