import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/styleValues.js';
import {colors, dimensions} from '../styles/styleDark.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

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
    const [showPassword, setShowPassword] = useState(true);

    const handleLogin = () => {
        navigation.navigate('Home');
    };
    const handleRegister = () => {
        navigation.navigate('Register');
    };
    const handleForgotPassword = () => {
        navigation.navigate('ForgotEmail');
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
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

                <View style={[styles.input, tw`flex flex-row items-center justify-between`]}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Hasło"
                        value={password}
                        autoCapitalize="none"
                        secureTextEntry={showPassword}
                        placeholderTextColor={styles.input.color}
                        onChangeText = {(text) => setPassword(text)}
                    />

                    <TouchableOpacity onPress={togglePassword}>
                        {showPassword ? (
                            <Icon name="eye" style={styles.icon}/>
                        ):(
                            <Icon name="eye-slash" style={styles.icon}/>
                        )}
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={localStyles.forgotPassword}>Zapomniałeś hasła?</Text>
                </TouchableOpacity>

                <View style={styles.separator}/>

                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Zaloguj się</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.gapContainer}>
                <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.lr_bottomText}>
                        Nie masz konta w serwisie
                        <Text style={styles.highlightText}> MovieGO</Text>
                        ?
                        <Text style={styles.boldText}> Załóż konto</Text>
                    </Text>
                </TouchableOpacity>
            </View>

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
