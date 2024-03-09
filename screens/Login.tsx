import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    ForgotPass: undefined;
    Register: undefined;
};
  
type NavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const Login = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View>
            <Text>Login Screen</Text>
            <Text>This is some random text.</Text>
            <Button title="Login" onPress={() => navigation.popToTop()} />
            <Button title="Go to ForgotPass" onPress={() => navigation.navigate('ForgotPass')} />
            <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default Login;