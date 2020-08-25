import HelloWorld from 'components/TestComp/HelloWorld';
import { View } from 'native-base';
import React from 'react';

const Home: React.FC = () => {
  return (
    <View>
      <HelloWorld />
    </View>
  );
};

export default Home;
