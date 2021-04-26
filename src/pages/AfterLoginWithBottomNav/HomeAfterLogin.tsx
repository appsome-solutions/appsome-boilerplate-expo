import { Button, View, Text } from 'native-base';
import React from 'react';

const HomeAfterLogin: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Concept</Text>
      <Button style={{ backgroundColor: 'yellow', width: 30, height: 30 }} />
    </View>
  );
};

export default HomeAfterLogin;
