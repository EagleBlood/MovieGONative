import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Devices: undefined;
};

type DevicesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Devices'
>;

function Devices() {
  const navigation = useNavigation<DevicesScreenNavigationProp>();

  return (
    <View>
      <Text>Devices</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default Devices;