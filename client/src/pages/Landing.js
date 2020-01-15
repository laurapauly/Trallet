import React from 'react';
import TralletLogo from '../assets/TralletLogo';
import styled from '@emotion/styled';
import { Redirect } from 'react-router-dom';

const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(180deg, #eff8f9 0%, #91d5e2 80%);
`;

const Heading = styled.h1`
  margin-top: 25px;
  color: ${props => props.theme.colors.fontSecondary};
  animation: fadeInUp 6s;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Title = styled.h3`
  margin-top: 10px;
  color: ${props => props.theme.colors.fontSecondary};
  animation: fadeInUp 6s;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export default function Landing() {
  const [redirect, setRedirect] = React.useState(false);

  function toJourneyPage() {
    setTimeout(() => setRedirect(true), 4000);
  }

  toJourneyPage();

  return (
    <LandingContainer>
      {redirect ? <Redirect to="/journeys" /> : true}
      <TralletLogo />
      <Heading>Trallet</Heading>
      <Title>Deine Reise-Budget-App</Title>
    </LandingContainer>
  );
}
