import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import InputFieldSmallDate from './InputFieldSmallDate';
import CloseIcon from './icons/close.js';
import SelectField from './SelectField.js';
import SubmitButton from './SubmitButton';

const Container = styled.div`
  height: 350px;
  padding: 20px;
  margin-bottom: 80px;
`;

const FormElement = styled.form`
  width: 100%;
  box-shadow: 0pt 3pt 20pt #00000029;
  background-color: ${light.colors.basic};
  height: 300px;
  padding: 20px 30px 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 12pt;
  font-style: bold;
  margin-right: auto;
  font-weight: bold;
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
  font-size: 10pt;
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
            <InputFieldSmallDate></InputFieldSmallDate>
            <InputFieldSmall></InputFieldSmall>
          </Container2>
          <Headings>Kategorie</Headings>
          <SelectField></SelectField>
          <SubmitButton />
        </Container3>
      </FormElement>
    </Container>
  );
}
