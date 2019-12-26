import React from 'react';
import NavBarFooter from './components/NavBarFooter.js';
import GlobalStyles from './GlobalStyles';
import light from './themes/light.js';
import { ThemeProvider } from 'emotion-theming';
import SelectField from './components/SelectField.js';

export default function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <SelectField />

        <NavBarFooter></NavBarFooter>
      </ThemeProvider>
    </>
  );
}
