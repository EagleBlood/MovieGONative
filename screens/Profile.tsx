import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const Profile = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
        <Text>Profile Screen</Text>
        <Text>This is some random text.</Text>
        <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Profile;