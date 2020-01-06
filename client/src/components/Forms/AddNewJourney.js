import React from 'react';
import InputFieldSmall from '../InputFieldSmall';
import CloseIcon from '../icons/close.js';
import SubmitButton from './SubmitButton';
import InputField from '../InputField.js';
import { useState } from 'react';
import FormItem from './FormItem.js';
import FormContainer from './FormContainer.js';
import FormElement from './FormElement.js';
import FormHeading from './FormHeading';
import FormContentContainer from './FormContentContainer';

const styleFormItem = {
  flex: '0 0 48%'
};

const styleFormElement = {
  height: '380px'
};
export default function AddNewJourney({ handleClose }) {
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
    <FormContainer onClick={handleClose}>
      <FormElement onClick={stop} onSubmit={handleSubmit} style={styleFormElement}>
        <FormContentContainer>
          <FormHeading>Neue Reise</FormHeading>
          <CloseIcon onClick={handleClose} />
        </FormContentContainer>
        <FormItem label="Titel">
          <InputField
            type="text"
            required
            placeholder="z.B. Bali"
            onChange={event => setTitle(event.target.value)}
          ></InputField>
        </FormItem>
        <FormItem label="Reisebudget">
          <InputField
            tpye="text"
            required
            placeholder="z.B. 500€"
            onChange={event => setBudget(event.target.value)}
          ></InputField>
        </FormItem>
        <FormContentContainer>
          <FormItem label="Startdatum" style={styleFormItem}>
            <InputFieldSmall
              type="date"
              required
              onChange={event => setDate1(event.target.value)}
            ></InputFieldSmall>
          </FormItem>
          <FormItem label="Enddatum" style={styleFormItem}>
            <InputFieldSmall
              type="date"
              required
              onChange={event => setDate2(event.target.value)}
            ></InputFieldSmall>
          </FormItem>
        </FormContentContainer>
        <SubmitButton>Speichern</SubmitButton>
      </FormElement>
    </FormContainer>
  );
}
