import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/styleValues.js';

type RootStackParamList = {
    Login: undefined;
    ForgotPass: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPass'>;

const ForgotPass = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation<NavigationProp>();

    const handleChangePassword = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.loginRegisterContainer}>
            <View style={styles.gapContainer}>
                <Text style={styles.headerText}>Zresetuj hasło</Text>
                <Text style={styles.grayText}>Podaj nowe hasło.</Text>

                <View style={styles.separator}/>

                <TextInput style={styles.input}
                           placeholder="Nowe hasło"
                           value={password}
                           onChangeText={setPassword}
                           autoCapitalize="none"
                           secureTextEntry={true}
                           placeholderTextColor={styles.input.color}
                />
                <TextInput style={styles.input}
                           placeholder="Potwierdź nowe hasło"
                           value={confirmPassword}
                           onChangeText={setConfirmPassword}
                           autoCapitalize="none"
                           secureTextEntry={true}
                           placeholderTextColor={styles.input.color}
                />
                <View style={styles.separator}/>

                <TouchableOpacity onPress={handleChangePassword} style={styles.button}>
                    <Text style={styles.buttonText}>Zmień hasło</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ForgotPass;

