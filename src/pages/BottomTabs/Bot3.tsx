import HelloWorld from 'components/TestComp/HelloWorld';
import { Button, Text, View } from 'native-base';
import React from 'react';

const Bot3: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HelloWorld />
      <Text>Bot3</Text>
      <Button style={{ backgroundColor: 'black', width: 30, height: 30 }} />
    </View>
  );
};

export default Bot3;
