import React from 'react';
import WaveIcon from '../components/icons/WaveIcon';
import styled from '@emotion/styled';
import NavBarFooter from '../components/NavBarFooter';
import FilterIcon from '../components/icons/FilterIcon';
import SpendingCard from '../components/SpendingCard';
import FilterForm from '../components/Forms/FilterForm';
import { useState } from 'react';
import groupSpendings from '../lib/groupSpendings';
import PropTypes from 'prop-types';

const SpendingsBackground = styled.header`
  width: 100%;
  padding-bottom: 6rem;
  position: relative;
`;
const StyleWaveIcon = styled(WaveIcon)`
  position: absolute;
  bottom: 0;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin: 40px 0px 0px 30px;
  color: ${props => props.theme.colors.fontPrimary};
`;

const SubHeading = styled.h5`
  margin: 0px 0px 0px 30px;
  color: ${props => props.theme.colors.fontPrimary};
`;

const Destination = styled.p`
  color: ${props => props.theme.colors.fontPrimary};
  margin: 40px 0px 0px 30px;
`;

const ContentContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding-bottom: 6rem;
  min-height: 56vh;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const ContentTitle = styled.h5`
  font-size: 14px;
  color: ${props => props.theme.colors.fontColor};
  margin: 30px 0px 0px 30px;
`;

const StyleFilterIcon = styled(FilterIcon)`
  margin: 30px 0px 0px 227px;
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

export default function SpendingList(props) {
  const journeyId = props.match.params.journeyId;

  const [spendingItems, setSpendingItems] = useState([]);
  const [journey, setJourney] = useState({});

  React.useEffect(() => {
    async function getSpendingItems() {
      const response = await fetch(`http://localhost:4040/journeys/${journeyId}/spendings`);
      const newSpending = await response.json();
      const transformedSpendings = groupSpendings(newSpending);
      setSpendingItems(transformedSpendings);

      const result = await fetch(`http://localhost:4040/journeys/${journeyId}`);
      const newjourney = await result.json();
      setJourney(newjourney);
    }

    getSpendingItems();
  }, [journeyId]);

  const [showFilter, setShowFilter] = useState(false);
  function handleFilter(event) {
    event.preventDefault();
  }
  function closeFilter() {
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
          <Destination>{journey.title}</Destination>
          <HeadingContainer>
            <Heading>{journey.budget}</Heading>
            <SubHeading>Verfügbar</SubHeading>
          </HeadingContainer>
          <StyleWaveIcon />
        </SpendingsBackground>
        <ContentContainer>
          <TitleContainer>
            <ContentTitle>Ausgaben</ContentTitle>
            <FilterButton onClick={() => setShowFilter(true)}>
              <StyleFilterIcon />
            </FilterButton>
          </TitleContainer>
          {Object.keys(spendingItems).map(date => {
            return <SpendingCard spendings={spendingItems[date]} key={date} date={date} />;
          })}
        </ContentContainer>
        <FilterFormFn showFilter={showFilter} />
        <NavBarFooter journeyId={journeyId}></NavBarFooter>
      </Container>
    </>
  );
}

SpendingList.propTypes = {
  journeyId: PropTypes.string,
  showFilter: PropTypes.bool,
  match: PropTypes.object
};
