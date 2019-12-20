import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import UmbrellaIcon from './icons/umbrella.js';
import HomeIcon from './icons/home.js';
import ChartIcon from './icons/chart.js';
import MapIcon from './icons/map.js';
import PlusButton from './PlusButton';

const Footer = styled.footer`
  height: 60px;
  width: 100%;
  background-color: ${light.colors.basic};

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

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${light.colors.basic};
  outline: none;
  border: none;
`;

const Highlight = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${light.colors.fontprimary};
  position: absolute;
  top: 0;
`;

const Highlightinactive = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${light.colors.basic};
  position: absolute;
  top: 0;
`;

export default function NavBarFooter() {
  return (
    <Footer>
      <Wrapper>
        <Highlightinactive></Highlightinactive>
        <NavButton>
          <HomeIcon />
        </NavButton>
      </Wrapper>
      <Wrapper>
        <Highlight></Highlight>
        <NavButton>
          <UmbrellaIcon />
        </NavButton>
      </Wrapper>
      <PlusButton />
      <Wrapper>
        <Highlightinactive></Highlightinactive>
        <NavButton>
          <ChartIcon />
        </NavButton>
      </Wrapper>
      <Highlightinactive></Highlightinactive>
      <NavButton>
        <MapIcon />
      </NavButton>
    </Footer>
  );
}
