import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Tickets: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Tickets'>;

const Tickets = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Tickets Screen</Text>
      <Text>This is some random text.</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Tickets;