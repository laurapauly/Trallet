import React from 'react';
import Background from '../components/background/Background';
import styled from '@emotion/styled';
import NavBarFooter from "../components/navigation/NavBarFooter";

const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  overflow: auto;
`;

const ContentContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundPrimary};
  padding-bottom: 30rem;
  min-height: 56vh;
`;

const Heading = styled.p`
  padding: 50px;
  text-align: center;
`;

export default function Map() {
  return (
    <>
      <Container>
        <Background>
          <Heading>
            You will see the map of the journey here, but sorry, it's still{' '}
            <strong>under construction!!</strong>
          </Heading>
        </Background>
        <ContentContainer></ContentContainer>
      </Container>
      <NavBarFooter />
    </>
  );
}
