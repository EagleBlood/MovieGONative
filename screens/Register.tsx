import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/styleValues.js';
import tw from 'twrnc';
import Icon from "react-native-vector-icons/FontAwesome";

type RootStackParamList = {
    Login: undefined;
    Register: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;

const Register = () => {
    const navigation = useNavigation<NavigationProp>();
    const [username, setUsername] = useState('');
    const [userMail, setUserMail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <View style={styles.loginRegisterContainer}>
            <View style={styles.gapContainer}>
                <Text style={styles.headerText}>Stwórz swoje konto w serwisie <Text style={styles.highlightText}> MovieGO</Text></Text>

                <View style={styles.separator}/>

                <TextInput style={styles.input}
                           placeholder="Adres e-mail"
                           value={userMail}
                           onChangeText={setUserMail}
                           autoCapitalize="none"
                           placeholderTextColor={styles.input.color}
                />
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

                <View style={[styles.input, tw`flex flex-row items-center justify-between`]}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Potwierdź hasło"
                        value={confirmPassword}
                        autoCapitalize="none"
                        secureTextEntry={showConfirmPassword}
                        placeholderTextColor={styles.input.color}
                        onChangeText = {(text) => setConfirmPassword(text)}
                    />

                    <TouchableOpacity onPress={toggleConfirmPassword}>
                        {showConfirmPassword ? (
                            <Icon name="eye" style={styles.icon}/>
                        ):(
                            <Icon name="eye-slash" style={styles.icon}/>
                        )}
                    </TouchableOpacity>
                </View>

                <View style={styles.separator}/>

                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Zarejestruj się</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.gapContainer}>
                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.lr_bottomText}>
                        Masz konta w serwisie
                        <Text style={styles.highlightText}> MovieGO</Text>
                        ?
                        <Text style={styles.boldText}> Zaloguj się</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Register;
