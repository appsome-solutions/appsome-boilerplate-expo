import HelloWorld from 'components/TestComp/HelloWorld';
import { Button, View, Text } from 'native-base';
import React from 'react';

const Top1: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HelloWorld />
      <Text>Top1</Text>
      <Button style={{ backgroundColor: 'yellow', width: 30, height: 30 }} />
    </View>
  );
};

export default Top1;
