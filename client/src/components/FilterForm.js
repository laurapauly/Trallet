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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
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
  width: 100%;
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

const styleFirstInput = {
  marginLeft: 0
};

const styleSecondInput = {
  marginRight: 0
};

export default function FilterForm({ handleClick, handleClose }) {
  function stop(event) {
    event.stopPropagation();
  }
  return (
    <Container onClick={handleClose}>
      <FormElement onClick={stop}>
        <Container1>
          <Title>Filter einstellen</Title>
          <CloseIcon onClick={handleClose}></CloseIcon>
        </Container1>
        <Container3>
          <Headings>Datum</Headings>
          <Container2>
            <InputFieldSmall style={styleFirstInput} type="date"></InputFieldSmall>
            <InputFieldSmall style={styleSecondInput} type="date"></InputFieldSmall>
          </Container2>
          <Headings>Kategorie</Headings>
          <SelectField></SelectField>
          <SubmitButton onClick={handleClick}>Speichern</SubmitButton>
        </Container3>
      </FormElement>
    </Container>
  );
}
