import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import InputFieldSmall from './InputFieldSmall';
import CloseIcon from './icons/close.js';
import SubmitButton from './SubmitButton';

import InputField from './InputField.js';

const Container = styled.div`
  /* padding: 20px; */
  margin: 50px;
`;

const FormElement = styled.form`
  box-shadow: 0px 3px 20px #00000029;
  background-color: ${light.colors.basic};

  padding: 20px 30px 20px 30px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 273px;
  right: 1px;
  left: 1px;
  z-index: 9999;
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
  margin-bottom: 10px;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0px 5px 0px;
`;

const Headings = styled.p`
  all: unset;
  margin-right: auto;
  font-size: 10pt;
  margin-top: 5px;
`;

const ButtonStyle = {
  margin: '10px 0px 10px 0px'
};

export default function NewJourneyForm() {
  return (
    <Container>
      <FormElement>
        <Container1>
          <Title>Neue Reise</Title>
          <CloseIcon></CloseIcon>
        </Container1>
        <Container3>
          <Headings>Titel</Headings>
          <InputField type="text" placeholder="z.B. Bali"></InputField>
          <Headings>Reisebudget</Headings>
          <InputField tpye="text" placeholder="z.B. 500€"></InputField>
        </Container3>
        <Container3>
          <Headings>Datum</Headings>
          <Container2>
            <InputFieldSmall type="date"></InputFieldSmall>
            <InputFieldSmall type="date"></InputFieldSmall>
          </Container2>
          <SubmitButton style={ButtonStyle}>Speichern</SubmitButton>
        </Container3>
      </FormElement>
    </Container>
  );
}
