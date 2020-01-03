import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import InputFieldSmall from './InputFieldSmall';
import CloseIcon from './icons/close.js';
import SubmitButton from './SubmitButton';
import InputField from './InputField.js';
import { useState } from 'react';

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
  height: 380px;
  box-shadow: 0px 3px 20px #00000029;
  background-color: ${light.colors.basic};
  padding: 20px 30px 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 14pt;
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
  width: 100%;
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
  margin-left: 7px;
`;

const styleFirstInput = {
  marginLeft: 0
};

const styleSecondInput = {
  marginRight: 0
};

export default function AddNewJourney({ handleClick, handleClose }) {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState(null);
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');

  async function handleSubmit(event) {
    await fetch('http://localhost:4000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, budget, date1, date2 })
    });

    setTitle('');
    setBudget(null);
    setDate1('');
    setDate2('');
  }
  function stop(event) {
    event.stopPropagation();
  }
  return (
    <Container onClick={handleClose}>
      <FormElement onClick={stop} onSubmit={handleSubmit}>
        <Container1>
          <Title>Neue Reise</Title>
          <CloseIcon onClick={handleClose} />
        </Container1>
        <Container3>
          <Headings>Titel</Headings>
          <InputField
            type="text"
            required
            placeholder="z.B. Bali"
            onChange={event => setTitle(event.target.value)}
          ></InputField>
          <Headings>Reisebudget</Headings>
          <InputField
            tpye="text"
            required
            placeholder="z.B. 500€"
            onChange={event => setBudget(event.target.value)}
          ></InputField>
        </Container3>
        <Container3>
          <Headings>Datum</Headings>
          <Container2>
            <InputFieldSmall
              type="date"
              required
              style={styleFirstInput}
              onChange={event => setDate1(event.target.value)}
            ></InputFieldSmall>
            <InputFieldSmall
              type="date"
              required
              style={styleSecondInput}
              onChange={event => setDate2(event.target.value)}
            ></InputFieldSmall>
          </Container2>
          <SubmitButton>Speichern</SubmitButton>
        </Container3>
      </FormElement>
    </Container>
  );
}
