import React from 'react';
import styled from '@emotion/styled';
import WaveIcon from '../components/icons/WaveIcon';
import InputFieldSmall from '../components/InputFieldSmall';
import NavBarFooterWithoutAdd from '../components/NavBarFooterWithoutAdd';

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
`;

const StyleFirstInputFieldSmall = styled(InputFieldSmall)`
  background-color: white;
  margin-left: 0;
`;
const StyleSecondInputFieldSmall = styled(InputFieldSmall)`
  background-color: white;
  margin-right: 0;
  margin-left: 30px;
`;

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
  color: ${props => props.theme.colors.fontPrimary};
`;

const TitleandInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function StatisticsList() {
  return (
    <>
      <StatisticsBackground>
        <Header>
          <HeaderContainer>
            <Destination>Südostasien</Destination>
            <Heading>Statistik</Heading>
          </HeaderContainer>
          <WaveIconStyled />
        </Header>
        <ContentContainer>
          <InputFieldContainer>
            <TitleandInput>
              <Title>Budget</Title>
              <StyleFirstInputFieldSmall placeholder="test" />
            </TitleandInput>
            <TitleandInput>
              <Title>Tagesbudget</Title>
              <StyleSecondInputFieldSmall placeholder={'test'} />
            </TitleandInput>
          </InputFieldContainer>
          <InputFieldContainer>
            <TitleandInput>
              <Title>Gesamtausgaben</Title>
              <StyleFirstInputFieldSmall placeholder={'test'} />
            </TitleandInput>
            <TitleandInput>
              <Title>Tagesdurchschnitt</Title>
              <StyleSecondInputFieldSmall />
            </TitleandInput>
          </InputFieldContainer>
        </ContentContainer>
      </StatisticsBackground>
      <NavBarFooterWithoutAdd></NavBarFooterWithoutAdd>
    </>
  );
}
