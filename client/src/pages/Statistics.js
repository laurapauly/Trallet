import React from 'react';
import styled from '@emotion/styled';
import WaveIcon from '../components/assets/wave.js';
import InputFieldSmall from '../components/InputFieldSmall.js';
import NavBarFooterWithoutAdd from '../components/NavBarFooterWithoutAdd.js';

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

const styleWaveIcon = {
  position: 'absolute',
  bottom: '0'
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin: 25px 0px 0px 40px;
  color: ${props => props.theme.colors.fontprimary};
`;

const Destination = styled.p`
  color: ${props => props.theme.colors.fontprimary};
  margin: 40px 0px 0px 40px;
`;

const ContentContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundprimary};
  padding-bottom: 6rem;
`;

const styleFirstInputFieldSmall = {
  backgroundColor: 'white',
  marginLeft: 0
};

const styleSecondInputFieldSmall = {
  backgroundColor: 'white',
  marginRight: 0,
  left: '30px'
};
const InputFieldContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.p`
  all: unset;
  margin-left: 5px;
  font-size: 14px;
  color: ${props => props.theme.colors.fontprimary};
`;

const TitleandInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Statistics() {
  return (
    <>
      <StatisticsBackground>
        <Header>
          <HeaderContainer>
            <Destination>Südostasien</Destination>
            <Heading>Statistik</Heading>
          </HeaderContainer>
          <WaveIcon style={styleWaveIcon} />
        </Header>
        <ContentContainer>
          <InputFieldContainer>
            <TitleandInput>
              <Title>Budget</Title>
              <InputFieldSmall style={styleFirstInputFieldSmall} placeholder={'test'} />
            </TitleandInput>
            <TitleandInput>
              <Title>Tagesbudget</Title>
              <InputFieldSmall style={styleSecondInputFieldSmall} placeholder={'test'} />
            </TitleandInput>
          </InputFieldContainer>
          <InputFieldContainer>
            <TitleandInput>
              <Title>Gesamtausgaben</Title>
              <InputFieldSmall style={styleFirstInputFieldSmall} placeholder={'test'} />
            </TitleandInput>
            <TitleandInput>
              <Title>Tagesdurchschnitt</Title>
              <InputFieldSmall style={styleSecondInputFieldSmall} />
            </TitleandInput>
          </InputFieldContainer>
        </ContentContainer>
      </StatisticsBackground>
      <NavBarFooterWithoutAdd></NavBarFooterWithoutAdd>
    </>
  );
}
