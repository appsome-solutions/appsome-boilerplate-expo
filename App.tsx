import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import ErrorHandler from 'global/ErrorHandler/ErrorHandler';
import { coreTheme } from 'global/Theme/coreTheme';
import { Container } from 'native-base';
import Home from 'pages/Home/Home';
import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Settings from './src/pages/AfterLoginWithBottomNav/StackNavigationAfterLogin';
import Bot1 from './src/pages/BottomTabs/Bot1';
import Bot2 from './src/pages/BottomTabs/Bot2';
import Bot3 from './src/pages/BottomTabs/Bot3';
import Top1 from './src/pages/TopTabs/Top1';
import Top2 from './src/pages/TopTabs/Top2';
import Top3 from './src/pages/TopTabs/Top3';
export default function App(): JSX.Element {
  // native-base is using this font as default. We have to load it, otherwise app will show error.
  // TODO: move it somewhere else probably
  const [loaded] = useFonts({
    Roboto: require('native-base/Fonts/Roboto.ttf'),
    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  });

  const Stack = createStackNavigator();
  const TabBot = createBottomTabNavigator();
  const TabTop = createMaterialTopTabNavigator();

  const BottomNav: FC = () => {
    return (
      <TabBot.Navigator>
        <TabBot.Screen name="Settings" component={Settings} />
        <TabBot.Screen name="Bot1" component={Bot1} />
        <TabBot.Screen name="Bot2" component={Bot2} />
        <TabBot.Screen name="Bot3" component={Bot3} />
      </TabBot.Navigator>
    );
  };

  const TopNavigation = () => {
    return (
      <TabTop.Navigator>
        <TabTop.Screen name="Top1" component={Top1} />
        <TabTop.Screen name="Top2" component={Top2} />
        <TabTop.Screen name="Top3" component={Top3} />
      </TabTop.Navigator>
    );
  };

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={coreTheme}>
      <NavigationContainer>
        <ErrorHandler>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <>
              <Stack.Screen name="TopNav" component={TopNavigation} />
              <Stack.Screen name="Bot2" component={Bot2} />
              <Stack.Screen name="Bot3" component={Bot3} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="BottomNav" component={BottomNav} />
            </>
          </Stack.Navigator>
        </ErrorHandler>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export const StyledContainer = styled(Container)`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
