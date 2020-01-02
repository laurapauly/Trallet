import React from 'react';
import WaveIcon from '../components/assets/wave.js';
import styled from '@emotion/styled';
import NavBarFooter from '../components/NavBarFooter.js';
import FilterIcon from '../components/icons/filter.js';
import SpendingCard from '../components/SpendingCard.js';
import FilterForm from '../components/FilterForm.js';
import { useState } from 'react';

const SpendingsBackground = styled.header`
  width: 100%;
  padding-bottom: 6rem;
  position: relative;
`;
const StyleWaveIcon = {
  position: 'absolute',
  bottom: '0'
};

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin: 40px 0px 0px 30px;
  color: ${props => props.theme.colors.fontprimary};
`;

const SubHeading = styled.h5`
  margin: 10px 0px 10px 30px;
  color: ${props => props.theme.colors.fontprimary};
`;

const Destination = styled.p`
  color: ${props => props.theme.colors.fontprimary};
  margin: 40px 0px 0px 30px;
`;

const ContentContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundprimary};
  padding-bottom: 6rem;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const ContentTitle = styled.h5`
  font-size: 14px;
  color: ${props => props.theme.colors.fontcolor};
  margin: 30px 0px 0px 30px;
`;

const StyleIcon = {
  margin: '30px 0px 0px 200px'
};

const Date = styled.p`
  font-size: 14px;
  margin-left: 30px;
  color: ${props => props.theme.colors.fontcolor};
  margin-bottom: 5px;
`;

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  overflow: auto;
`;

const FilterButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
`;

export default function SpendingList() {
  const [showFilter, setShowFilter] = useState(false);
  function handleFilter(event) {
    event.preventDefault();
    console.log(event);
  }
  function closeFilter(event) {
    setShowFilter(false);
  }
  const FilterFormFn = ({ showFilter }) => {
    if (!showFilter) {
      return null;
    }

    return <FilterForm handleClick={handleFilter} handleClose={closeFilter} />;
  };

  return (
    <>
      <Container>
        <SpendingsBackground>
          <Destination>Südostasien</Destination>
          <HeadingContainer>
            <Heading>1980 €</Heading>
            <SubHeading>Verfügbar</SubHeading>
          </HeadingContainer>
          <WaveIcon style={StyleWaveIcon} />
        </SpendingsBackground>
        <ContentContainer>
          <TitleContainer>
            <ContentTitle>Ausgaben</ContentTitle>
            <FilterButton onClick={() => setShowFilter(true)}>
              <FilterIcon style={StyleIcon} />
            </FilterButton>
          </TitleContainer>
          <Date>Heute</Date>
          <SpendingCard />
          <SpendingCard />
          <SpendingCard />
          <SpendingCard />
          <SpendingCard />
        </ContentContainer>
        <FilterFormFn showFilter={showFilter} />
        <NavBarFooter></NavBarFooter>
      </Container>
    </>
  );
}
