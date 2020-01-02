import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import InputFieldSmall from './InputFieldSmall.js';
import CloseIcon from './icons/close.js';
import SubmitButton from './SubmitButton';
import SpendingButton from './SpendingButton';
import InputField from './InputField';
import FoodIcon from './icons/food.js';
import TransportIcon from './icons/transport.js';
import AirplaneIcon from './icons/airplane.js';
import HotelIcon from './icons/hotel.js';
import DrinkIcon from './icons/drinks.js';
import ShoppingIcon from './icons/shopping.js';
import ActionIcon from './icons/action.js';
import SmileyIcon from './icons/smiley.js';

const Container = styled.div`
  padding: 20px 5px 20px 5px;
  margin-bottom: 200px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
`;

const FormElement = styled.form`
  width: 100%;
  box-shadow: 0px 3px 20px #00000029;
  background-color: ${light.colors.basic};
  height: 550px;
  padding: 20px 30px 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 14pt;
  margin-right: auto;
  font-weight: bold;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Headings = styled.p`
  all: unset;
  margin-top: 10px;
  font-size: 14px;
  margin-right: auto;
  margin-left: 5px;
`;

const CategorysContainer = styled.div`
  display: flex;
  align-items: space-between;
  margin-top: 5px;
  width: 100%;
`;

const CategoryTitle = styled.p`
  all: unset;
  font-size: 7pt;
  color: ${light.colors.fontsecondary};
  text-align: center;
  margin-top: 10px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 0;
  margin-bottom: 10px;
`;

const styleFirstInput = {
  marginLeft: 0
};

const styleSecondInput = {
  marginRight: 0
};

const styleButtonRight = {
  marginRight: '5px'
};

const styleButtonLeft = {
  marginLeft: '5px'
};

export default function SpendingForm({ handleClick, handleClose, value }) {
  function stop(event) {
    event.stopPropagation();
  }
  return (
    <Container onClick={handleClose}>
      <FormElement onClick={stop}>
        <Container1>
          <Title>Neue Ausgabe</Title>
          <CloseIcon onClick={handleClose}></CloseIcon>
        </Container1>
        <Headings>Titel</Headings>
        <InputField placeholder="z.B. Oma Jamu"></InputField>
        <Container1>
          <Headings>Wert</Headings>
          <Headings>Datum</Headings>
        </Container1>
        <Container3>
          <Container2>
            <InputFieldSmall
              placeholder="Euro"
              type="text"
              style={styleFirstInput}
            ></InputFieldSmall>
            <InputFieldSmall type="date" style={styleSecondInput}></InputFieldSmall>
          </Container2>
          <Headings>Ort</Headings>
          <InputField placeholder="z.B. Canggu, Bali"></InputField>
          <Headings>Kategorie</Headings>
          <CategorysContainer>
            <CategoryContainer>
              <CategoryTitle>Essen</CategoryTitle>
              <SpendingButton style={styleButtonRight}>
                <FoodIcon fill={light.colors.action}></FoodIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Transport</CategoryTitle>
              <SpendingButton style={styleButtonRight} onClick={handleClick}>
                <TransportIcon fill={light.colors.action}></TransportIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Flüge</CategoryTitle>
              <SpendingButton onClick={handleClick}>
                <AirplaneIcon fill={light.colors.action}></AirplaneIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Hotel</CategoryTitle>
              <SpendingButton style={styleButtonLeft} onClick={handleClick}>
                <HotelIcon fill={light.colors.action}></HotelIcon>
              </SpendingButton>
            </CategoryContainer>
          </CategorysContainer>
          <CategorysContainer>
            <CategoryContainer style={styleFirstInput}>
              <CategoryTitle>Drinks</CategoryTitle>
              <SpendingButton onClick={handleClick} style={styleButtonRight}>
                <DrinkIcon fill={light.colors.action}></DrinkIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Einkauf</CategoryTitle>
              <SpendingButton onClick={handleClick} style={styleButtonRight}>
                <ShoppingIcon fill={light.colors.action}></ShoppingIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Freizeit</CategoryTitle>
              <SpendingButton onClick={handleClick}>
                <ActionIcon fill={light.colors.action}></ActionIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer style={styleSecondInput}>
              <CategoryTitle>Sonstiges</CategoryTitle>
              <SpendingButton onClick={handleClick} style={styleButtonLeft}>
                <SmileyIcon fill={light.colors.action}></SmileyIcon>
              </SpendingButton>
            </CategoryContainer>
          </CategorysContainer>
          <SubmitButton onClick={handleClick}>Speichern</SubmitButton>
        </Container3>
      </FormElement>
    </Container>
  );
}
