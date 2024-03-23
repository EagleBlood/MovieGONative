import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/styleDark.js';
import {colors} from '../styles/styleValues.js';

type RootStackParamList = {
    Login: undefined;
    ForgotPass: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'ForgotPass'>;

const ForgotEmail = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation<NavigationProp>();

    const handleResetPassword = () => {
        // Here you can handle the password reset logic
        // console.log(`Reset password for: ${email}`);
        // navigation.goBack();
        navigation.navigate('ForgotPass');
    };

    const handleRegister = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.loginRegisterContainer}>
            <View style={styles.gapContainer}>
                <Text style={styles.headerText}>Zapomniałeś hasła?</Text>
                <Text style={styles.grayText}>Podaj adres e-mail powiązany z kontem MovieGO.</Text>

                <View style={styles.separator}/>

                <TextInput style={styles.input}
                           placeholder="Adres e-mail"
                           value={email}
                           onChangeText={setEmail}
                           autoCapitalize="none"
                           placeholderTextColor={colors.appThirdColor}
                />
                <View style={styles.separator}/>

                <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
                    <Text style={styles.buttonText}>Resetuj hasło</Text>
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

export default ForgotEmail;
