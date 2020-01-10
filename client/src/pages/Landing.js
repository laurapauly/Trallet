import React from 'react';
import TralletLogo from '../assets/TralletLogo';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  margin: 20px;
  align-items: center;
`;
const Title = styled.h3`
  margin-top: 30px;
  color: ${props => props.theme.colors.fontSecondary};
`;

const Button = styled(Link)`
  text-decoration: none;
  width: 100px;
  height: 35px;
  padding: 5px;
  text-align: center;
  margin: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${props => props.theme.colors.action};
  :hover {
    background-color: ${props => props.theme.colors.background};
  }
`;

export default function Landing() {
  return (
    <LandingContainer>
      <TralletLogo />
      <Title>Deine Reise-Budget-App</Title>
      <Button to="/journeys">Los geht's!</Button>
    </LandingContainer>
  );
}
