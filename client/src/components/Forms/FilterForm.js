import React from 'react';
import InputField from '../InputField';
import CloseIcon from '../icons/CloseIcon';
import CategoriesSelectField from './CategoriesSelectField';
import SubmitButton from './SubmitButton';
import FormContainer from './FormContainer';
import FormElement from './FormElement';
import FormItem from './FormItem';
import FormHeading from './FormHeading';
import FormContentContainer from './FormContentContainer';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const StyleFormElement = styled(FormElement)`
  height: 300px;
`;

const StyleFormItem = styled(FormItem)`
  flex: 0 0 48%;
`;

export default function FilterForm({ onClose, journeyId }) {
  let history = useHistory();
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  function stop(event) {
    event.stopPropagation();
  }

  function handleSubmit() {
    // const categoryString = 'category=' + category;
    history.push(
      `/journeys/${journeyId}/?${category && 'category=' + category}${category &&
        date &&
        '&'}${date && 'date=' + date}`
    );
    onClose();
  }

  return (
    <FormContainer onClick={onClose}>
      <StyleFormElement onClick={stop} onSubmit={handleSubmit}>
        <FormContentContainer>
          <FormHeading>Filter einstellen</FormHeading>
          <CloseIcon onClick={onClose} />
        </FormContentContainer>

        <StyleFormItem label="Datum">
          <InputField type="date" onChange={event => setDate(event.target.value)} />
        </StyleFormItem>

        <FormItem label="Kategorie">
          <CategoriesSelectField onChange={event => setCategory(event.target.value)} />
        </FormItem>
        <SubmitButton type="submit">Speichern</SubmitButton>
      </StyleFormElement>
    </FormContainer>
  );
}
FilterForm.propTypes = {
  onClose: PropTypes.func,
  journeyId: PropTypes.string
};
