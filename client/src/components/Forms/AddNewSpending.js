import React from 'react';
import styled from '@emotion/styled';
import InputFieldSmall from '../InputFieldSmall';
import CloseIcon from '../icons/close';
import SubmitButton from './SubmitButton';
import InputField from '../InputField';
import { useState } from 'react';
import FormItem from './FormItem';
import IconSelect from './IconSelect';
import categories from '../Categories';
import FormContainer from './FormContainer';
import FormElement from './FormElement';
import FormHeading from './FormHeading';
import FormContentContainer from './FormContentContainer';

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

export default function AddNewSpending({ handleClick, handleClose, value }) {
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
    <FormContainer onClick={handleClose}>
      <FormElement onClick={stop} onSubmit={handleSubmit}>
        <FormContentContainer>
          <FormHeading>Neue Ausgabe</FormHeading>
          <CloseIcon onClick={handleClose} />
        </FormContentContainer>
        <FormItem label="Titel">
          <InputField
            required
            placeholder="z.B. Oma Jamu"
            onChange={event => setTitle(event.target.value)}
          ></InputField>
        </FormItem>
        <FormContentContainer>
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
        </FormContentContainer>
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
    </FormContainer>
  );
}
