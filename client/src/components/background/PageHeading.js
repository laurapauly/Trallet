import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Label = styled.h1`
  color: ${props => props.theme.colors.fontPrimary};
  margin: 40px 0px 0px 40px;
`;

export default function PageHeading({ label }) {
  return <Label>{label}</Label>;
}

PageHeading.propTypes = {
  label: PropTypes.string
};
