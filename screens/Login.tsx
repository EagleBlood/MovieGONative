import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/styleDark.js';
import {colors, dimensions} from '../styles/styleValues.js';

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    ForgotPass: undefined;
    ForgotEmail: undefined;
    Register: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;



const Login = () => {
    const navigation = useNavigation<NavigationProp>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home');
    };
    const handleRegister = () => {
        navigation.navigate('Register');
    };
    const handleForgotPassword = () => {
        navigation.navigate('ForgotEmail');
    };

    return (
        <View style={styles.loginRegisterContainer}>
            <View style={styles.gapContainer}>
                <Text style={styles.headerText}>Witaj!</Text>
                <Text style={styles.grayText}>Proszę się zalogować</Text>

                <View style={styles.separator}/>

                <TextInput style={styles.input}
                           placeholder="Nazwa użytkownika"
                           value={username}
                           onChangeText={setUsername}
                           autoCapitalize="none"
                           placeholderTextColor={styles.input.color}
                />
                <TextInput style={styles.input}
                           placeholder="Hasło"
                           value={password}
                           onChangeText={setPassword}
                           autoCapitalize="none"
                           secureTextEntry={true}
                           placeholderTextColor={styles.input.color}
                />

                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={localStyles.forgotPassword}>Zapomniałeś hasła?</Text>
                </TouchableOpacity>

                <View style={styles.separator}/>

                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Zaloguj się</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.lr_bottomText}>
                    Nie masz konta w serwisie
                    <Text style={styles.highlightText}> MovieGO</Text>
                    ?
                    <Text style={styles.boldText}> Załóż konto</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const localStyles = StyleSheet.create({

    forgotPassword: {
        textAlign: 'right',
        fontSize: dimensions.smallTextSize,
        color: colors.appThirdColor,
    },

});

export default Login;
