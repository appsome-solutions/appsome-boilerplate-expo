import BookmarkSVG from 'assets/bookmark';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import ErrorHandler from 'global/ErrorHandler/ErrorHandler';
import { coreTheme } from 'global/Theme/coreTheme';
import { Container } from 'native-base';
import Home from 'pages/Home/Home';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

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
