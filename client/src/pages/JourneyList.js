import React from 'react';
import styled from '@emotion/styled';
import WaveIcon from '../components/icons/wave.js';
import JourneyCard from '../components/JourneyCard.js';
import PlusIcon from '../components/icons/plus.js';
import AddNewJourney from '../components/Forms/AddNewJourney.js';
import { useState } from 'react';

const JourneysBackground = styled.header`
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

const StylePlusIcon = {
  fill: '#DCB480',
  margin: '30px 15px 0px 90px'
};

const HeaderContainer = styled.div`
  display: flex;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function JourneyList() {
  const [showForm, setShowForm] = useState(false);
  function handleForm(event) {
    event.preventDefault();
  }
  function closeForm(event) {
    setShowForm(false);
  }
  const JourneyFormFn = ({ showForm }) => {
    if (!showForm) {
      return null;
    }
    return <AddNewJourney handleClick={handleForm} handleClose={closeForm} />;
  };

  return (
    <>
      <JourneysBackground>
        <HeaderContainer>
          <HeadingContainer>
            <Heading>Deine Reisen</Heading>
            <SubHeading>im Überblick</SubHeading>
          </HeadingContainer>
          <PlusIcon style={StylePlusIcon} onClick={() => setShowForm(true)} />
        </HeaderContainer>
        <WaveIcon style={StyleWaveIcon} />
      </JourneysBackground>
      <CardContainer>
        <JourneyCard></JourneyCard>
      </CardContainer>
      <JourneyFormFn showForm={showForm} />
    </>
  );
}
