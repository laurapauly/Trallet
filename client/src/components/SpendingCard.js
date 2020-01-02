import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import FoodIcon from './icons/food';

const SpendingCardElement = styled.div`
  height: 60px;
  box-shadow: 0pt 3pt 20pt #00000029;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${light.colors.basic};
  margin: 10px 20px 10px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.h5`
  all: unset;
  color: ${light.colors.fontsecondary};
`;

const Location = styled.p`
  all: unset;
  font-size: 9pt;
  color: ${light.colors.fontsmall};
`;

const Spending = styled.h5`
  all: unset;
  color: ${light.colors.fontsecondary};
  margin-bottom: 20px;
  margin-right: 20px;
`;

const Wrapper2 = styled.div`
  display: flex;
  margin-right: 80px;
  margin-left: 20px;
`;

export default function SpendingCard() {
  return (
    <SpendingCardElement>
      <Wrapper2>
        <div>
          <FoodIcon />
        </div>
        <Wrapper>
          <Title>Oma Jamu</Title>
          <Location>Canggu, Bali</Location>
        </Wrapper>
      </Wrapper2>
      <Spending>-50.000 IDR</Spending>
    </SpendingCardElement>
  );
}
