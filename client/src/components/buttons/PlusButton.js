import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light';
import PlusIcon from '../icons/PlusIcon';
import { useState } from 'react';
import AddNewSpending from '../forms/AddNewSpending';
import PropTypes from 'prop-types';

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
  background-color: ${light.colors.backgroundPrimary};
  border-radius: 50%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export default function AddButton({ journeyId }) {
  const [showForm, setShowForm] = useState(false);
  function handleForm(event) {
    event.preventDefault();
    console.log(event);
  }
  function closeForm() {
    setShowForm(false);
  }
  const FormFunction = ({ showForm }) => {
    if (!showForm) {
      return null;
    }

    return (
      <AddNewSpending handleClick={handleForm} handleClose={closeForm} journeyId={journeyId} />
    );
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

AddButton.propTypes = {
  journeyId: PropTypes.string,
  showForm: PropTypes.bool
};
