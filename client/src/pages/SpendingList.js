import React from 'react';
import WaveIcon from '../components/assets/wave.js';
import styled from '@emotion/styled';
import NavBarFooter from '../components/NavBarFooter.js';
import FilterIcon from '../components/icons/filter.js';
import SpendingCard from '../components/SpendingCard.js';
import FilterForm from '../components/FilterForm.js';
import { useState } from 'react';

const SpendingsBackground = styled.header`
  background-color: ${props => props.theme.colors.background};
  height: 35%;
  width: 100%;
  position: fixed;
  top: 0;
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
  height: 65%;
  position: fixed;
  bottom: 0;
  /* position: fixed;
  bottom: 0;
  overflow: auto; */
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
`;

const Container = styled.div`
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
            <FilterButton onClick={() => setShowFilter(!showFilter)}>
              <FilterIcon style={StyleIcon} />
            </FilterButton>
            {showFilter && <FilterForm />}
          </TitleContainer>
          <Date>Heute</Date>
          <SpendingCard />
          <SpendingCard />
          <SpendingCard />
          <SpendingCard />
          <SpendingCard />
        </ContentContainer>
      </Container>
      <NavBarFooter></NavBarFooter>
    </>
  );
}
