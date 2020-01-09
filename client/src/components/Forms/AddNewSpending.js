import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '../icons/CloseIcon';
import SubmitButton from './SubmitButton';
import InputField from '../InputField';
import { useState } from 'react';
import FormItem from './FormItem';
import IconSelect from './IconSelect';
import categories from '../categories';
import FormContainer from './FormContainer';
import FormElement from './FormElement';
import FormHeading from './FormHeading';
import FormContentContainer from './FormContentContainer';
import PropTypes from 'prop-types';

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: -20px;
`;

const StyleFormItem = styled(FormItem)`
  flex: 0 0 48%;
`;

export default function AddNewSpending({ handleClose, journeyId }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  async function handleSubmit() {
    await fetch(`http://localhost:4040/journeys/${journeyId}/spendings`, {
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
          <StyleFormItem label="Wert">
            <InputField
              required
              placeholder="Euro"
              type="number"
              step="0.01"
              onChange={event => setAmount(event.target.value)}
            ></InputField>
          </StyleFormItem>
          <StyleFormItem label="Datum">
            <InputField
              required
              type="date"
              onChange={event => setDate(event.target.value)}
            ></InputField>
          </StyleFormItem>
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
AddNewSpending.propTypes = {
  handleClose: PropTypes.func,
  journeyId: PropTypes.string
};
