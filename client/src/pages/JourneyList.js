import React from 'react';
import styled from '@emotion/styled';
import WaveIcon from '../components/icons/wave.js';
import JourneyCard from '../components/JourneyCard.js';
import PlusIcon from '../components/icons/plus.js';
import AddNewJourney from '../components/Forms/AddNewJourney.js';
import { useState } from 'react';

const JourneysBackground = styled.header`
  padding-bottom: 6rem;
  width: 100%;
  position: relative;
`;

const StyleWaveIcon = {
  position: 'absolute',
  bottom: '0'
};

const Heading = styled.h1`
  margin: 40px 0px 0px 30px;
  color: ${props => props.theme.colors.fontprimary};
`;

const SubHeading = styled.h5`
  margin: 10px 0px 10px 30px;
  color: ${props => props.theme.colors.fontprimary};
`;

const CardContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundprimary};
  padding-bottom: 6rem;
  padding-top: 1rem;
`;

const StylePlusIcon = {
  fill: '#DCB480',
  margin: '40px 15px 0px 90px'
};

const HeaderContainer = styled.div`
  display: flex;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  overflow: auto;
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
    return <AddNewJourney handleClick={handleForm} onClose={closeForm} />;
  };

  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}
