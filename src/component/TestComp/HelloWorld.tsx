import { Text } from 'native-base';
import React from 'react';

import { HelloWorldView, HelloWorldButton } from './HallowWorld.sc';

const HelloWorld: React.FC = () => {
  const [text, setText] = React.useState('Blow up the world');
  return (
    <HelloWorldView>
      <Text>{text}</Text>
      <HelloWorldButton
        onPress={() => {
          setText('Boom!');
        }}
      >
        <Text>Click me!</Text>
      </HelloWorldButton>
    </HelloWorldView>
  );
};

export default HelloWorld;
