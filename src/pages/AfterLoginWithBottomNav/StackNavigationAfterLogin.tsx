import { createStackNavigator, StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { View } from 'native-base';
import React, { FC } from 'react';

import HomeAfterLogin from './HomeAfterLogin';

const Stack = createStackNavigator();
const HeaderLeft: FC<StackHeaderLeftButtonProps> = () => <View />;

const Settings: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeAfterLogin"
      screenOptions={{
        // with empty string it displays "back"
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: '#68D3A0',
      }}
    >
      <Stack.Screen name="HomeAfterLogin" component={HomeAfterLogin} options={{ headerLeft: HeaderLeft }} />
    </Stack.Navigator>
  );
};

export default Settings;
