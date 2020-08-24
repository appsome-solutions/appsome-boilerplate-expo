import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { Container } from 'native-base';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import BookmarkSVG from './src/assets/bookmark';
import ErrorHandler from './src/global/ErrorHandler/ErrorHandler';
import { coreTheme } from './src/global/Theme/coreTheme';
import Home from './src/pages/Home/Home';

export default function App(): JSX.Element {
  // native-base is using this font as default. We have to load it, otherwise app will show error.
  // TODO: move it somewhere else probably
  const [loaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  });

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={coreTheme}>
      <StyledContainer>
        <ErrorHandler>
          <Home />
          {/* SVG test */}
          <BookmarkSVG />
        </ErrorHandler>
      </StyledContainer>
    </ThemeProvider>
  );
}

export const StyledContainer = styled(Container)`
  display: flex;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
