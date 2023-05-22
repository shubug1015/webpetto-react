import React from 'react';
import Router from 'Components/Router';
import GlobalStyles from 'Components/Styles/GlobalStyles';
import Theme from 'Components/Styles/Theme';
import { ThemeProvider } from 'styled-components';
import ChannelService from 'Components/ChannelService';

const App = () => {
  function isPreRendering() {
    return navigator.userAgent === 'ReactSnap';
  }

  if (!isPreRendering()) {
    ChannelService.boot({
      pluginKey: '4bccfee5-b825-4425-9a0c-0d3cb30c195b',
    });
  }

  return (
    <ThemeProvider theme={Theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
