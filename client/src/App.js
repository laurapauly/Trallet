import React from 'react';
import NavBarFooter from './components/NavBarFooter.js';
import GlobalStyles from './GlobalStyles';
import light from './themes/light.js';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Journeys from './pages/Journeys.js';
import SpendingList from './pages/SpendingList.js';
import Statistics from './pages/Statistics.js';
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
                <Journeys />
              </Route>
              <Route exact path="/statistics">
                <Statistics />
              </Route>
            </Switch>
            <NavBarFooter></NavBarFooter>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}
