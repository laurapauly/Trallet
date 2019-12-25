import React from 'react';
import NavBarFooter from './components/NavBarFooter.js';
import GlobalStyles from './GlobalStyles';
import light from './themes/light.js';
import { ThemeProvider } from 'emotion-theming';
import SpendingForm from './components/SpendingForm.js';

export default function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />

        <SpendingForm />
        <NavBarFooter></NavBarFooter>
      </ThemeProvider>
    </>
  );
}
