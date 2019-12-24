import React from 'react';
import NavBarFooter from './components/NavBarFooter.js';
import GlobalStyles from './GlobalStyles';
import light from './themes/light.js';
import { ThemeProvider } from 'emotion-theming';
import JourneyCard from './components/JourneyCard.js';
import SpendingCard from './components/SpendingCard.js';
import SpendingForm from './components/SpendingForm.js';

export default function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <JourneyCard />
        <SpendingCard />
        <SpendingForm />
        <NavBarFooter></NavBarFooter>
      </ThemeProvider>
    </>
  );
}
