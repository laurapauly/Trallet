import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import InputFieldSmall from './InputFieldSmall.js';
import CloseIcon from './icons/close.js';
import SubmitButton from './SubmitButton';
import InputField from './InputField';
import { useState } from 'react';
import FormItem from './FormItem.js';
import IconSelect from './IconSelect.js';

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
  box-shadow: 0px 3px 20px #00000029;
  background-color: ${light.colors.basic};
  height: 550px;
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
  width: 100%;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: -20px;
`;

const styleFormItem = {
  flex: '0 0 48%'
};

const categories = [
  {
    icon: 'food',
    value: 'food',
    fill: light.colors.action
  },
  {
    icon: 'transport',
    value: 'transport',
    fill: light.colors.action
  },
  {
    icon: 'airplane',
    value: 'airplane',
    fill: light.colors.action
  },
  {
    icon: 'hotel',
    value: 'hotel',
    fill: light.colors.action
  },
  {
    icon: 'drinks',
    value: 'drinks',
    fill: light.colors.action
  },
  {
    icon: 'shopping',
    value: 'shopping',
    fill: light.colors.action
  },
  {
    icon: 'action',
    value: 'action',
    fill: light.colors.action
  },
  {
    icon: 'smiley',
    value: 'smiley',
    fill: light.colors.action
  }
];

export default function SpendingForm({ handleClick, handleClose, value }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  async function handleSubmit(event) {
    await fetch('http://localhost:4040/items/1/spendings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, amount, date, location, category })
    });

    setTitle('');
    setAmount(null);
    setDate('');
    setLocation('');
    setCategory('');
  }
  function stop(event) {
    event.stopPropagation();
  }

  return (
    <Container onClick={handleClose}>
      <FormElement onClick={stop} onSubmit={handleSubmit}>
        <Container1>
          <Title>Neue Ausgabe</Title>
          <CloseIcon onClick={handleClose}></CloseIcon>
        </Container1>
        <FormItem label="Titel">
          <InputField
            required
            placeholder="z.B. Oma Jamu"
            onChange={event => setTitle(event.target.value)}
          ></InputField>
        </FormItem>
        <Container1>
          <FormItem label="Wert" style={styleFormItem}>
            <InputFieldSmall
              required
              placeholder="Euro"
              type="number"
              onChange={event => setAmount(event.target.value)}
            ></InputFieldSmall>
          </FormItem>

          <FormItem label="Datum" style={styleFormItem}>
            <InputFieldSmall
              required
              type="date"
              onChange={event => setDate(event.target.value)}
            ></InputFieldSmall>
          </FormItem>
        </Container1>
        <FormItem label="Ort">
          <InputField
            required
            placeholder="z.B. Canggu, Bali"
            onChange={event => setLocation(event.target.value)}
          ></InputField>
        </FormItem>
        <FormItem label="Kategorie" />
        <CategoryContainer>
          <IconSelect items={categories} onSelect={setCategory} selected={category} />
        </CategoryContainer>
        <SubmitButton>Speichern</SubmitButton>
      </FormElement>
    </Container>
  );
}
