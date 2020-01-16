import React from 'react';
import styled from '@emotion/styled';
import WaveIcon from '../icons/WaveIcon';
import PropTypes from 'prop-types';

const JourneysBackground = styled.header`
  padding-bottom: 6rem;
  width: 100%;
  position: relative;
`;

const StyleWaveIcon = styled(WaveIcon)`
  position: absolute;
  bottom: 0;
`;

export default function Background({ children }) {
  return (
    <JourneysBackground>
      <StyleWaveIcon />
      {children}
    </JourneysBackground>
  );
}

Background.propTypes = {
  children: PropTypes.node
};
