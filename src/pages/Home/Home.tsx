import { View } from 'native-base';
import React from 'react';

import HelloWorld from '../../component/TestComp/HelloWorld';
const Home: React.FC = () => {
  return (
    <View>
      <HelloWorld />
    </View>
  );
};

export default Home;
