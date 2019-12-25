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
  height: 600px;
  padding: 10px;
`;

const FormElement = styled.form`
  width: 100%;
  box-shadow: 0pt 3pt 20pt #00000029;
  background-color: ${light.colors.basic};
  height: 100%;
  padding: 20px 30px 20px 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 12pt;
  font-style: bold;
  margin-right: auto;
  font-weight: bold;
  margin-left: 10px;
`;

const Container1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0px;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
`;

const Container3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Headings = styled.p`
  all: unset;
  margin-top: 15px;
  font-size: 10pt;
  margin-right: auto;
  margin-left: 10px;
`;

const CategorysContainer = styled.div`
  display: flex;
  align-items: space-between;

  margin-top: 5px;
`;

const CategoryTitle = styled.p`
  all: unset;
  font-size: 7pt;
  color: ${light.colors.fontsecondary};
  margin-left: 13px;
  margin-top: 10px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function SpendingForm() {
  return (
    <Container>
      <FormElement>
        <Container1>
          <Title>Neue Ausgabe</Title>
          <CloseIcon></CloseIcon>
        </Container1>
        <Headings>Titel</Headings>
        <InputField placeholder="z.B. Oma Jamu"></InputField>
        <Container1>
          <Headings>Wert</Headings>
          <Headings>Datum</Headings>
        </Container1>
        <Container3>
          <Container2>
            <InputFieldSmall placeholder="Euro" type="text"></InputFieldSmall>
            <InputFieldSmall type="date"></InputFieldSmall>
          </Container2>
          <Headings>Ort</Headings>
          <InputField placeholder="z.B. Canggu, Bali"></InputField>
          <Headings>Kategorie</Headings>
          <CategorysContainer>
            <CategoryContainer>
              <CategoryTitle>Essen</CategoryTitle>
              <SpendingButton>
                <FoodIcon fill={light.colors.action}></FoodIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Transport</CategoryTitle>
              <SpendingButton>
                <TransportIcon fill={light.colors.action}></TransportIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Flüge</CategoryTitle>
              <SpendingButton>
                <AirplaneIcon fill={light.colors.action}></AirplaneIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Hotel</CategoryTitle>
              <SpendingButton>
                <HotelIcon fill={light.colors.action}></HotelIcon>
              </SpendingButton>
            </CategoryContainer>
          </CategorysContainer>
          <CategorysContainer>
            <CategoryContainer>
              <CategoryTitle>Drinks</CategoryTitle>
              <SpendingButton>
                <DrinkIcon fill={light.colors.action}></DrinkIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Einkauf</CategoryTitle>
              <SpendingButton>
                <ShoppingIcon fill={light.colors.action}></ShoppingIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Freizeit</CategoryTitle>
              <SpendingButton>
                <ActionIcon fill={light.colors.action}></ActionIcon>
              </SpendingButton>
            </CategoryContainer>
            <CategoryContainer>
              <CategoryTitle>Sonstiges</CategoryTitle>
              <SpendingButton>
                <SmileyIcon fill={light.colors.action}></SmileyIcon>
              </SpendingButton>
            </CategoryContainer>
          </CategorysContainer>
          <SubmitButton />
        </Container3>
      </FormElement>
    </Container>
  );
}
