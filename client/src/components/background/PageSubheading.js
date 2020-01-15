import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Div = styled.div``;

const Label = styled.h5`
  color: ${props => props.theme.colors.fontPrimary};
  margin: 10px 0px 0px 40px;
`;

export default function PageSubheading({ label, style, children }) {
  return (
    <Div style={style}>
      <Label>{label}</Label>
      {children}
    </Div>
  );
}

PageSubheading.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.element
};
