import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

const Register = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Text>Register Screen</Text>
      <Text>This is some random text.</Text>
      <Button title="Go to Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Register;