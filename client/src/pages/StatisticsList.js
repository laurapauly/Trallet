import React from 'react';
import styled from '@emotion/styled';
import NavBarFooter from '../components/navigation/NavBarFooter';
import FormItem from '../components/forms/FormItem';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Background from '../components/background/Background';
import PageHeading from '../components/background/PageHeading';
import PageDestination from '../components/background/PageDestination';
import { sumOfSpendings } from '../lib/sumOfSpendings';
import groupSpendings from '../lib/groupSpendings';
import { calculateDifferenceInDays } from '../lib/calculateDifferenceInDays';
import { getAveragePerDay } from '../lib/getAveragePerDay';

const StatisticsContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 35%;
  width: 100%;
  position: fixed;
  top: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding-bottom: 6rem;
  min-height: 60vh;
`;

const InputFieldContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex: 0 0 48%;
`;

const TitleandInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentField = styled.div`
  width: 150px;
  height: 35px;
  background-color: ${props => props.theme.colors.basic};
  border-radius: 10px;
  border: none;
  font-size: 16px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.action};
  font-weight: bold;
`;

export default function StatisticsList(props) {
  const journeyId = props.match.params.journeyId;
  const [journeyDetails, setJourneyDetails] = useState({});
  const [spendingItems, setSpendingItems] = useState({});

  React.useEffect(() => {
    async function getSpendingItems() {
      const response = await fetch(`http://localhost:4040/journeys/${journeyId}/spendings`);
      const newSpending = await response.json();
      const transformedSpendings = groupSpendings(newSpending);
      setSpendingItems(transformedSpendings);

      const result = await fetch(`http://localhost:4040/journeys/${journeyId}`);
      const newjourney = await result.json();
      setJourneyDetails(newjourney);
    }

    getSpendingItems();
  }, [journeyId]);

  return (
    <>
      <StatisticsContainer>
        <Background>
          <HeaderContainer>
            <PageDestination label={journeyDetails.title}></PageDestination>
            <PageHeading label="Statistik" />
          </HeaderContainer>
        </Background>
        <ContentContainer>
          <InputFieldContainer>
            <TitleandInput>
              <FormItem label="Budget" />
              <ContentField>{journeyDetails.budget} €</ContentField>
            </TitleandInput>
            <TitleandInput>
              <FormItem label="Tagesbudget" />
              <ContentField>
                {getAveragePerDay(
                  journeyDetails.budget,
                  calculateDifferenceInDays(
                    new Date(journeyDetails.startDate),
                    new Date(journeyDetails.endDate)
                  )
                ) + ' €'}
              </ContentField>
            </TitleandInput>
          </InputFieldContainer>
          <InputFieldContainer>
            <TitleandInput>
              <FormItem label="Gesamtausgaben" />
              <ContentField>{sumOfSpendings(spendingItems) + ' €'}</ContentField>
            </TitleandInput>
            <TitleandInput>
              <FormItem label="Tagesdurchschnitt" />
              <ContentField>
                {getAveragePerDay(
                  sumOfSpendings(spendingItems),
                  calculateDifferenceInDays(new Date(journeyDetails.startDate), new Date())
                ) + ' €'}
              </ContentField>
            </TitleandInput>
          </InputFieldContainer>
        </ContentContainer>
      </StatisticsContainer>
      <NavBarFooter journeyId={journeyId} />
    </>
  );
}

StatisticsList.propTypes = {
  journeyId: PropTypes.string,
  showFilter: PropTypes.bool,
  match: PropTypes.object
};
