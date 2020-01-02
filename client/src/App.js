import React from 'react';
import NavBarFooter from './components/NavBarFooter.js';
import GlobalStyles from './GlobalStyles';
import light from './themes/light.js';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JourneyList from './pages/JourneyList.js/index.js.js';
import SpendingList from './pages/SpendingList.js';
import Statistics from './pages/Statistics.js';
import Map from './pages/Map.js';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Router>
          <Container>
            <Switch>
              <Route exact path="/">
                <SpendingList />
              </Route>
              <Route exact path="/journeys">
                <JourneyList />
              </Route>
              <Route exact path="/statistics">
                <Statistics />
                <NavBarFooter></NavBarFooter>
              </Route>
              <Route exact path="/map">
                <Map />
                <NavBarFooter></NavBarFooter>
              </Route>
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}
