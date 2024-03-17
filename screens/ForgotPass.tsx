import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/styleValues.js';
import tw from 'twrnc';
import Icon from "react-native-vector-icons/FontAwesome";

type RootStackParamList = {
    Login: undefined;
    ForgotPass: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPass'>;

const ForgotPass = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const navigation = useNavigation<NavigationProp>();

    const handleChangePassword = () => {
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
                <Text style={styles.headerText}>Zresetuj hasło</Text>
                <Text style={styles.grayText}>Podaj nowe hasło.</Text>

                <View style={styles.separator}/>

                <View style={[styles.input, tw`flex flex-row items-center justify-between`]}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nowe hasło"
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
                        placeholder="Potwierdź nowe hasło"
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

                <TouchableOpacity onPress={handleChangePassword} style={styles.button}>
                    <Text style={styles.buttonText}>Zmień hasło</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ForgotPass;

