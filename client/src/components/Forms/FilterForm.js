import React from 'react';
import InputFieldSmall from '../InputFieldSmall';
import CloseIcon from '../icons/close.js';
import SelectField from './SelectField.js';
import SubmitButton from './SubmitButton';
import FormContainer from './FormContainer.js';
import FormElement from './FormElement.js';
import FormItem from './FormItem.js';
import FormHeading from './FormHeading.js';
import FormContentContainer from './FormContentContainer';

const styleFormElement = {
  height: '300px'
};

const styleFormItem = {
  flex: '0 0 48%'
};
export default function FilterForm({ handleClick, handleClose }) {
  function stop(event) {
    event.stopPropagation();
  }
  return (
    <FormContainer onClick={handleClose}>
      <FormElement onClick={stop} style={styleFormElement}>
        <FormContentContainer>
          <FormHeading>Filter einstellen</FormHeading>
          <CloseIcon onClick={handleClose}></CloseIcon>
        </FormContentContainer>
        <FormContentContainer>
          <FormItem label="Startdatum" style={styleFormItem}>
            <InputFieldSmall type="date"></InputFieldSmall>
          </FormItem>
          <FormItem label="Enddatum" style={styleFormItem}>
            <InputFieldSmall type="date"></InputFieldSmall>
          </FormItem>
        </FormContentContainer>
        <FormItem label="Kategorie">
          <SelectField></SelectField>
        </FormItem>
        <SubmitButton onClick={handleClick}>Speichern</SubmitButton>
      </FormElement>
    </FormContainer>
  );
}
