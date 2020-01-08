import React from 'react';
import styled from '@emotion/styled';
import WaveIcon from '../components/icons/WaveIcon';
import NavBarFooter from '../components/NavBarFooter';
import FormItem from '../components/Forms/FormItem';
import { useState } from 'react';
import PropTypes from 'prop-types';

const StatisticsBackground = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 35%;
  width: 100%;
  position: fixed;
  top: 0;
`;

const Header = styled.div`
  width: 100%;
  padding-bottom: 6rem;
  position: relative;
`;

const WaveIconStyled = styled(WaveIcon)`
  position: absolute;
  bottom: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin: 25px 0px 0px 40px;
  color: ${props => props.theme.colors.fontPrimary};
`;

const Destination = styled.p`
  color: ${props => props.theme.colors.fontPrimary};
  margin: 40px 0px 0px 40px;
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

  React.useEffect(() => {
    async function getJourneyDetails() {
      const response = await fetch(`http://localhost:4040/journeys/${journeyId}`);
      const newjourney = await response.json();
      setJourneyDetails(newjourney);
    }

    getJourneyDetails();
  }, [journeyId]);

  return (
    <>
      <StatisticsBackground>
        <Header>
          <HeaderContainer>
            <Destination>{journeyDetails.title}</Destination>
            <Heading>Statistik</Heading>
          </HeaderContainer>
          <WaveIconStyled />
        </Header>
        <ContentContainer>
          <InputFieldContainer>
            <TitleandInput>
              <FormItem label="Budget" />
              <ContentField>{journeyDetails.budget}</ContentField>
            </TitleandInput>
            <TitleandInput>
              <FormItem label="Tagesbudget" />
              <ContentField />
            </TitleandInput>
          </InputFieldContainer>
          <InputFieldContainer>
            <TitleandInput>
              <FormItem label="Gesamtausgaben" />
              <ContentField />
            </TitleandInput>
            <TitleandInput>
              <FormItem label="Tagesdurchschnitt" />
              <ContentField />
            </TitleandInput>
          </InputFieldContainer>
        </ContentContainer>
      </StatisticsBackground>
      <NavBarFooter />
    </>
  );
}

StatisticsList.propTypes = {
  journeyId: PropTypes.string,
  showFilter: PropTypes.bool,
  match: PropTypes.object
};
