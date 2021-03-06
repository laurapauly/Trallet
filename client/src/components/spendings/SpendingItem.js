import React from 'react';
import styled from '@emotion/styled';
import light from '../../themes/light';
import categories from '../categories/categories';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.h5`
  all: unset;
  color: ${light.colors.fontSecondary};
`;

const Location = styled.p`
  all: unset;
  font-size: 9pt;
  color: ${light.colors.fontSmall};
`;

const Spending = styled.div`
  color: ${light.colors.fontSecondary};
  text-align: right;
  flex: 1 1 auto;
  margin-left: auto;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 15px;
`;

export default function SpendingItem({ spending }) {
  const CategoryIcon = () => {
    const filteredCategories = categories.filter(category => {
      return spending.category === category.value;
    });
    if (filteredCategories.length !== 1) {
      return null;
    }
    const icon = filteredCategories[0];
    return <icon.Icon size={25} />;
  };

  return (
    <Container>
      <Wrapper2>
        <div>
          <CategoryIcon />
        </div>
        <Wrapper>
          <Title>{spending.title}</Title>
          <Location>{spending.location}</Location>
        </Wrapper>
      </Wrapper2>
      <Spending>-{spending.amount}€</Spending>
    </Container>
  );
}

SpendingItem.propTypes = {
  spending: PropTypes.object
};
