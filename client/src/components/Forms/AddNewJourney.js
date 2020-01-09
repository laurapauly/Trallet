import React from 'react';
import CloseIcon from '../icons/CloseIcon';
import SubmitButton from './SubmitButton';
import InputField from '../InputField';
import { useState } from 'react';
import FormItem from './FormItem';
import FormContainer from './FormContainer';
import FormElement from './FormElement';
import FormHeading from './FormHeading';
import FormContentContainer from './FormContentContainer';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyleFormItem = styled(FormItem)`
  flex: 0 0 48%;
`;

const StyleFormElement = styled(FormElement)`
  height: 380px;
`;

export default function AddNewJourney({ onClose }) {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  async function handleSubmit() {
    await fetch('http://localhost:4040/journeys', {
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
    <FormContainer onClick={onClose}>
      <StyleFormElement onClick={stop} onSubmit={handleSubmit}>
        <FormContentContainer>
          <FormHeading>Neue Reise</FormHeading>
          <CloseIcon onClick={onClose} />
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
            required
            placeholder="z.B. 500€"
            type="number"
            step="0.01"
            onChange={event => setBudget(event.target.value)}
          ></InputField>
        </FormItem>
        <FormContentContainer>
          <StyleFormItem label="Startdatum">
            <InputField
              type="date"
              required
              onChange={event => setStartDate(event.target.value)}
            ></InputField>
          </StyleFormItem>
          <StyleFormItem label="Enddatum">
            <InputField
              type="date"
              required
              onChange={event => setEndDate(event.target.value)}
            ></InputField>
          </StyleFormItem>
        </FormContentContainer>
        <SubmitButton>Speichern</SubmitButton>
      </StyleFormElement>
    </FormContainer>
  );
}

AddNewJourney.propTypes = {
  onClose: PropTypes.func
};
