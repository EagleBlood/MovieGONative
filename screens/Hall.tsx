import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Hall: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Hall'>;

const Hall = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Hall Screen</Text>
      <Text>This is some random text.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Hall;