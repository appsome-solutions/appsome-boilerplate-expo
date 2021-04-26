import HelloWorld from 'components/TestComp/HelloWorld';
import { Button, View, Text } from 'native-base';
import React from 'react';

const Top2: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HelloWorld />
      <Text>Top2</Text>
      <Button style={{ backgroundColor: 'red', width: 30, height: 30  }} />
    </View>
  );
};

export default Top2;
