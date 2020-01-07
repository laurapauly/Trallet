import React from 'react';
import styled from '@emotion/styled';
import light from '../themes/light.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CardElement = styled(Link)`
  all: unset;
  background-color: ${props => props.theme.colors.basic};
  border-radius: 10px;
  box-shadow: 0pt 3pt 20pt #00000029;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  background-color: ${light.colors.basic};
  margin: 10px 20px 10px 20px;
  position: relative;
  z-index: 10;
`;

const Picture = styled.img`
  height: 65px;
  width: 100px;
  background-color: ${light.colors.fontSmall};
  border-radius: 5px;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Destination = styled.p`
  all: unset;
  font-size: 16px;
  margin-top: 10px;
  display: block;

  font-weight: bold;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Details = styled.p`
  all: unset;

  font-size: 10pt;
  margin-top: 5px;
  display: flex;
`;

const Highlight = styled.p`
  all: unset;
  font-weight: bold;
  color: ${light.colors.action};
  margin-right: 3px;
`;

const CardContainer = styled.div`
  margin-top: 20px;
`;

export default function JourneyCard() {
  const [journeyItems, setJourneyItems] = useState([]);
  async function getJourneyItems() {
    const response = await fetch('http://localhost:4040/journeys');
    const newJourneys = await response.json();
    setJourneyItems(newJourneys);
  }

  React.useEffect(() => {
    getJourneyItems();
  }, []);

  const link = function(id) {
    return `/journeys/${id}`;
  };

  return (
    <div>
      {journeyItems.map(item => (
        <CardContainer key={item.id}>
          <CardElement to={link(item.id)}>
            <Picture
              src="https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="Journey Picture"
            ></Picture>
            <ContentContainer>
              <Destination>{item.title}</Destination>
              <DetailsContainer>
                <Details>
                  {item.startDate} - {item.endDate}
                </Details>
                <Details>
                  <Highlight>{item.budget}</Highlight>
                  verfügbar
                </Details>
              </DetailsContainer>
            </ContentContainer>
          </CardElement>
        </CardContainer>
      ))}
    </div>
  );
}
