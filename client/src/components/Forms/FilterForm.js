import React from 'react';
import InputFieldSmall from '../InputFieldSmall';
import CloseIcon from '../icons/CloseIcon';
import SelectField from './SelectField';
import SubmitButton from './SubmitButton';
import FormContainer from './FormContainer';
import FormElement from './FormElement';
import FormItem from './FormItem';
import FormHeading from './FormHeading';
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
