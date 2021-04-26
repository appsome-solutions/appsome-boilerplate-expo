import HelloWorld from 'components/TestComp/HelloWorld';
import { Button, Text, View } from 'native-base';
import React from 'react';

const Bot2: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HelloWorld />
      <Text>Bot2</Text>
      <Button style={{ backgroundColor: 'red', width: 30, height: 30  }} />
    </View>
  );
};

export default Bot2;
