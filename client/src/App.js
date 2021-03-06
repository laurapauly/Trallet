import React from 'react';
import GlobalStyles from './GlobalStyles';
import light from './themes/light';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JourneyList from './pages/JourneyList';
import SpendingList from './pages/SpendingList';
import StatisticsList from './pages/StatisticsList';
import Map from './pages/Map';
import styled from '@emotion/styled';
import Landing from './pages/Landing';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
`;

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Router>
        <Container>
          <Switch>
            <Route exact path="/landing">
              <Landing />
            </Route>
            <Route exact path="/" />
            <Route path="/journeys/:journeyId" component={SpendingList} />
            <Route exact path="/journeys">
              <JourneyList />
            </Route>
            <Route exact path="/statistics/:journeyId" component={StatisticsList} />
            <Route exact path="/map">
              <Map />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
