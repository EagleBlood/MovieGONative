import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Login in</Text>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
                <Text>Reset your password</Text>
            </TouchableOpacity>
            <Button title="Login" onPress={() => navigation.popToTop()} />
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Create an account</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default Login;