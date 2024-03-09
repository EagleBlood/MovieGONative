import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  ForgotPass: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPass'>;

const ForgotPass = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<NavigationProp>();

  const handleResetPassword = () => {
    // Here you can handle the password reset logic
    console.log(`Reset password for: ${email}`);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Forgot Password</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ForgotPass;