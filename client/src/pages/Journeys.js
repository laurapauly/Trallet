import React from 'react';
import styled from '@emotion/styled';
import WaveIcon from '../components/assets/wave.js';
import JourneyCard from '../components/JourneyCard.js';

const JourneysBackground = styled.header`
  background-color: ${props => props.theme.colors.background};
  height: 35%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
`;

const IconStyle = {
  position: 'absolute',
  bottom: '0'
};

const Heading = styled.h1`
  margin: 70px 0px 0px 40px;
  color: ${props => props.theme.colors.fontprimary};
`;

const SubHeading = styled.h5`
  margin: 10px 0px 10px 40px;
  color: ${props => props.theme.colors.fontprimary};
`;

const CardContainer = styled.div`
  height: 65%;
  width: 100%;
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  overflow: auto;
`;

export default function Journeys() {
  return (
    <>
      <JourneysBackground>
        <Heading>Deine Reisen</Heading>
        <SubHeading>im Überblick</SubHeading>
        <WaveIcon style={IconStyle} />
      </JourneysBackground>

      <CardContainer>
        <JourneyCard></JourneyCard>
        <JourneyCard></JourneyCard>
        <JourneyCard></JourneyCard>
        <JourneyCard></JourneyCard>
      </CardContainer>
    </>
  );
}
