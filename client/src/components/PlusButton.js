import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import PlusIcon from './icons/plus.js';
import { useState } from 'react';
import SpendingForm from './SpendingForm';

const PlusButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${light.colors.action};
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBackground = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${light.colors.backgroundprimary};
  border-radius: 50%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export default function Add() {
  const [showForm, setShowForm] = useState(false);
  function handleForm(event) {
    event.preventDefault();
    console.log(event);
  }
  function closeForm(event) {
    setShowForm(false);
  }
  const FormFunction = ({ showForm }) => {
    if (!showForm) {
      return null;
    }

    return <SpendingForm handleClick={handleForm} handleClose={closeForm} />;
  };
  return (
    <>
      <ButtonBackground>
        <PlusButton onClick={() => setShowForm(true)}>
          <PlusIcon></PlusIcon>
        </PlusButton>
      </ButtonBackground>
      <FormFunction showForm={showForm} />
    </>
  );
}
