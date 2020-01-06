import styled from '@emotion/styled';
import React from 'react';

const Div = styled.div``;

const Label = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

export default function FormItem({ label, children, style }) {
  return (
    <Div style={style}>
      <Label>{label}</Label>
      {children}
    </Div>
  );
}
