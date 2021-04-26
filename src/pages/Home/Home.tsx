import { useNavigation } from '@react-navigation/native';
import HelloWorld from 'components/TestComp/HelloWorld';
import { Button, View, Text } from 'native-base';
import React from 'react';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <HelloWorld />
      <Button
        style={{ backgroundColor: 'red', width: 200, height: 100, marginBottom: 20, marginTop: 20 }}
        onPress={() => {
          navigation.navigate('TopNav');
        }}
      >
        <Text>Top Navigation</Text>
      </Button>
      <Button
        style={{ backgroundColor: 'green', width: 200, height: 100 }}
        onPress={() => {
          navigation.navigate('BottomNav');
        }}
      >
        <Text>Bottom Navigation</Text>
      </Button>
    </View>
  );
};

export default Home;
