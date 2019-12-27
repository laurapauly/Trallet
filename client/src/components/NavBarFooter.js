import React from 'react';
import styled from '@emotion/styled';
import UmbrellaIcon from './icons/umbrella.js';
import HomeIcon from './icons/home.js';
import ChartIcon from './icons/chart.js';
import MapIcon from './icons/map.js';
import PlusButton from './PlusButton';

import { useLocation, Link } from 'react-router-dom';

const Footer = styled.footer`
  height: 60px;
  width: 100%;
  background-color: ${props => props.theme.colors.basic};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
  padding-left: 30px;
  padding-right: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavButton = styled(Link)`
  width: 25px;
  height: 25px;
  background-color: ${props => props.theme.colors.basic};
  border: none;
`;

const Highlight = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${props =>
    props.active ? props.theme.colors.fontprimary : props.theme.colors.basic};
  position: absolute;
  top: 0;
`;

export default function NavBarFooter() {
  const location = useLocation();
  return (
    <Footer>
      <Wrapper>
        <Highlight active={location.pathname === '/'} />
        <NavButton to="/">
          <HomeIcon to="/" active={location.pathname === '/'} />
        </NavButton>
      </Wrapper>
      <Wrapper>
        <Highlight active={location.pathname === '/journeys'} />
        <NavButton to="/journeys">
          <UmbrellaIcon to="/journeys" active={location.pathname === '/journeys'} />
        </NavButton>
      </Wrapper>
      <PlusButton />
      <Wrapper>
        <Highlight active={location.pathname === '/statistics'} />
        <NavButton to="/statistics">
          <ChartIcon to="/statistics" active={location.pathname === '/statistics'} />
        </NavButton>
      </Wrapper>
      <Wrapper>
        <Highlight active={location.pathname === '/map'} />
        <NavButton to="/map">
          <MapIcon to="/map" active={location.pathname === '/map'} />
        </NavButton>
      </Wrapper>
    </Footer>
  );
}
