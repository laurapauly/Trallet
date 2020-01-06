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
export default function AddNewJourney({ handleClick, handleClose }) {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  async function handleSubmit(event) {
    await fetch('http://localhost:4000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, budget, startDate, endDate })
    });

    setTitle('');
    setBudget(null);
    setStartDate('');
    setEndDate('');
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
            placeholder="z.B. Bali, Indonesien"
            onChange={event => setTitle(event.target.value)}
          ></InputField>
        </FormItem>
        <FormItem label="Reisebudget">
          <InputField
            tpye="number"
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
              onChange={event => setStartDate(event.target.value)}
            ></InputFieldSmall>
          </FormItem>
          <FormItem label="Enddatum" style={styleFormItem}>
            <InputFieldSmall
              type="date"
              required
              onChange={event => setEndDate(event.target.value)}
            ></InputFieldSmall>
          </FormItem>
        </FormContentContainer>
        <SubmitButton>Speichern</SubmitButton>
      </FormElement>
    </FormContainer>
  );
}
