import React from 'react';
import styled from '@emotion/styled';
import NavBarFooter from '../components/navigation/NavBarFooter';
import FilterIcon from '../components/icons/FilterIcon';
import SpendingCard from '../components/spendings/SpendingCard';
import FilterForm from '../components/forms/FilterForm';
import { useState } from 'react';
import groupSpendings from '../lib/groupSpendings';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Background from '../components/background/Background';
import PageHeading from '../components/background/PageHeading';
import PageSubheading from '../components/background/PageSubheading';
import PageDestination from '../components/background/PageDestination';
import { sumOfSpendings } from '../lib/sumOfSpendings';
import { getAvailableBudget } from '../lib/getAvailableBudget';

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  let filter = useLocation().search;

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  React.useEffect(() => {
    async function getSpendingItems() {
      const response = await fetch(
        `http://localhost:4040/journeys/${journeyId}/spendings${filter}`
      );
      const newSpending = await response.json();
      const transformedSpendings = groupSpendings(newSpending);
      setSpendingItems(transformedSpendings);

      const result = await fetch(`http://localhost:4040/journeys/${journeyId}`);
      const newjourney = await result.json();
      setJourney(newjourney);
    }

    getSpendingItems();
  }, [journeyId, filter]);

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

    return <FilterForm handleClick={handleFilter} onClose={closeFilter} journeyId={journeyId} />;
  };

  useQuery();
  return (
    <>
      <Container>
        <Background>
          <PageDestination label={journey.title} />
          <HeadingContainer>
            <PageHeading
              label={getAvailableBudget(sumOfSpendings(spendingItems), journey.budget) + ' €'}
            />
            <PageSubheading label="Verfügbar" />
          </HeadingContainer>
        </Background>
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
        <NavBarFooter journeyId={journeyId} />
      </Container>
    </>
  );
}

SpendingList.propTypes = {
  journeyId: PropTypes.string,
  showFilter: PropTypes.bool,
  match: PropTypes.object
};
