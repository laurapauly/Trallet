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
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyleFormElement = styled(FormElement)`
  height: 300px;
`;

const StyleFormItem = styled(FormItem)`
  flex: 0 0 48%;
`;

export default function FilterForm({ handleClick, handleClose }) {
  function stop(event) {
    event.stopPropagation();
  }
  return (
    <FormContainer onClick={handleClose}>
      <StyleFormElement onClick={stop}>
        <FormContentContainer>
          <FormHeading>Filter einstellen</FormHeading>
          <CloseIcon onClick={handleClose}></CloseIcon>
        </FormContentContainer>
        <FormContentContainer>
          <StyleFormItem label="Startdatum">
            <InputFieldSmall type="date"></InputFieldSmall>
          </StyleFormItem>
          <StyleFormItem label="Enddatum">
            <InputFieldSmall type="date"></InputFieldSmall>
          </StyleFormItem>
        </FormContentContainer>
        <FormItem label="Kategorie">
          <SelectField></SelectField>
        </FormItem>
        <SubmitButton onClick={handleClick}>Speichern</SubmitButton>
      </StyleFormElement>
    </FormContainer>
  );
}
FilterForm.propTypes = {
  handleClick: PropTypes.func,
  handleClose: PropTypes.func
};
