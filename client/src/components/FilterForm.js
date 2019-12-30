import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import InputFieldSmall from './InputFieldSmall';

import CloseIcon from './icons/close.js';
import SelectField from './SelectField.js';
import SubmitButton from './SubmitButton';

const Container = styled.div`
  padding: 20px 5px 20px 5px;
  margin-bottom: 200px;
  position: absolute;
  top: 10px;
  right: 1px;
  left: 1px;
  z-index: 999;
  margin: 20px;
`;

const FormElement = styled.form`
  width: 100%;
  height: 300px;
  box-shadow: 0px 3px 20px #00000029;
  background-color: ${light.colors.basic};
  padding: 20px 30px 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-right: auto;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Headings = styled.p`
  all: unset;
  margin-right: auto;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 3px;
`;

export default function FilterForm() {
  return (
    <Container>
      <FormElement>
        <Container1>
          <Title>Filter einstellen</Title>
          <CloseIcon></CloseIcon>
        </Container1>
        <Container3>
          <Headings>Datum</Headings>
          <Container2>
            <InputFieldSmall type="date"></InputFieldSmall>
            <InputFieldSmall type="date"></InputFieldSmall>
          </Container2>
          <Headings>Kategorie</Headings>
          <SelectField></SelectField>
          <SubmitButton>Speichern</SubmitButton>
        </Container3>
      </FormElement>
    </Container>
  );
}
