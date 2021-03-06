import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light';
import SpendingItem from './SpendingItem';
import PropTypes from 'prop-types';

const SpendingCardElement = styled.div`
  box-shadow: 0pt 3pt 20pt #00000029;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${light.colors.basic};
  margin: 10px 20px 10px 20px;
`;

const DateContainer = styled.div`
  font-size: 14px;
  margin-left: 30px;
  color: ${props => props.theme.colors.fontColor};
  margin-bottom: 5px;
  margin-top: 15px;
`;

const DividerLine = styled.hr`
  all: unset;
  width: 100%;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Container = styled.div`
  margin-top: 10px;
`;

export default function SpendingCard({ spendings, date }) {
  function DividerFunction({ index, length }) {
    if (index + 1 !== length) {
      return <DividerLine></DividerLine>;
    }

    return null;
  }

  function formatDate(input) {
    const newDate = new Date(input);
    return newDate.toLocaleDateString('de-DE', {
      weekday: 'short',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  }
  return (
    <Container>
      <DateContainer>{formatDate(date)}</DateContainer>
      <SpendingCardElement>
        {spendings.map((spending, index) => {
          return (
            <>
              <SpendingItem spending={spending} key={spending.id} />
              <DividerFunction index={index} length={spendings.length} />
            </>
          );
        })}
      </SpendingCardElement>
    </Container>
  );
}

SpendingCard.propTypes = {
  spendings: PropTypes.array,
  date: PropTypes.string,
  index: PropTypes.number,
  length: PropTypes.number
};
