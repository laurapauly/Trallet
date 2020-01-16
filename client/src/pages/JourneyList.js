import React from 'react';
import styled from '@emotion/styled';
import JourneyCard from '../components/cards/JourneyCard';
import PlusIcon from '../components/icons/PlusIcon';
import AddNewJourney from '../components/forms/AddNewJourney';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Background from '../components/background/Background';
import PageHeading from '../components/background/PageHeading';
import PageSubheading from '../components/background/PageSubheading';

const CardContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding-bottom: 5rem;
  padding-top: 1rem;
`;

const StylePlusIcon = styled(PlusIcon)`
  fill: #dcb480;
  margin: 40px 15px 0px 90px;
`;

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
  function closeForm() {
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
        <Background>
          <HeaderContainer>
            <HeadingContainer>
              <PageHeading label="Deine Reisen" />
              <PageSubheading label="im Überblick" />
            </HeadingContainer>
            <StylePlusIcon onClick={() => setShowForm(true)} />
          </HeaderContainer>
        </Background>
        <CardContainer>
          <JourneyCard />
        </CardContainer>
        <JourneyFormFn showForm={showForm} />
      </Container>
    </>
  );
}

JourneyList.propTypes = {
  showForm: PropTypes.bool
};
