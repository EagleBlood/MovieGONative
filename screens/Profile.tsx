import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/styleDark.js';
import {colors, dimensions} from '../styles/styleValues.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';

type RootStackParamList = {
    Home: undefined;
    Profile: undefined;
    ForgotPass: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const Profile = () => {

    const navigation = useNavigation<NavigationProp>();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const [changeLogin, setChangeLogin] = useState(true);
    const [changeData, setChangeData] = useState(true);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleChangeLogin = () => {
        setChangeLogin(!changeLogin);
        //dodać funkcję zapisu zmiany danych - wysyłanie zapytania na serwer
    };
    const handleChangePassword = () => {
        navigation.navigate('ForgotPass'); //trzeba przekazać maila lub nazwę użytkownika
    };
    const handleChangeData = () => {
        setChangeData(!changeData);
        //dodać funkcję zapisu zmiany danych - wysyłanie zapytania na serwer
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.gapContainer}>
                <Text style={styles.headerText}>Witaj, |username|</Text>
                <View style={styles.separator}/>
                <View style={localStyles.editHeader}>
                    <Text style={styles.text}>Login</Text>
                    <TouchableOpacity onPress={handleChangeLogin}>
                        {changeLogin ? (
                            <Text style={localStyles.changeText}>Zapisz zmiany</Text>
                        ) : (
                            <Text style={localStyles.changeText}>Zmień login</Text>
                        )}
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Nazwa użytkownika"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    placeholderTextColor={styles.input.color}
                    editable={changeLogin}
                />
                <View style={styles.smallSeparator}/>
                <View style={localStyles.editHeader}>
                    <Text style={styles.text}>Hasło</Text>
                    <TouchableOpacity onPress={handleChangePassword}>
                        <Text style={localStyles.changeText}>Zmień hasło</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.input,tw`flex flex-row items-center justify-between`]}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Hasło"
                        value={password}
                        autoCapitalize="none"
                        secureTextEntry={showPassword}
                        placeholderTextColor={styles.input.color}
                        onChangeText={(text) => setPassword(text)}
                        editable={false}
                    />
                    <TouchableOpacity onPress={togglePassword}>
                        {showPassword ? (
                            <Icon name="eye" style={styles.icon}/>
                        ) : (
                            <Icon name="eye-slash" style={styles.icon}/>
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.separator}/>
                <View style={localStyles.editHeader}>
                    <Text style={styles.text}>Profil</Text>
                    <TouchableOpacity onPress={handleChangeData}>
                        {changeData ? (
                            <Text style={localStyles.changeText}>Zapisz zmiany</Text>
                        ) : (
                            <Text style={localStyles.changeText}>Zmień dane</Text>
                        )}
                    </TouchableOpacity>
                </View>
                <View style={localStyles.inputContainer}>
                    <Text style={localStyles.grayText}>Imię</Text>
                    <TextInput style={styles.input}
                               placeholder="Jan"
                               value={name}
                               onChangeText={setName}
                               autoCapitalize="none"
                               placeholderTextColor={styles.input.color}
                               editable={changeData}
                    />
                </View>
                <View style={localStyles.inputContainer}>
                    <Text style={localStyles.grayText}>Nazwisko</Text>
                    <TextInput style={styles.input}
                               placeholder="Kowalski"
                               value={surname}
                               onChangeText={setSurname}
                               autoCapitalize="none"
                               placeholderTextColor={styles.input.color}
                               editable={changeData}
                    />
                </View>
                <View style={localStyles.inputContainer}>
                    <Text style={localStyles.grayText}>Adres e-mail</Text>
                    <TextInput style={styles.input}
                               placeholder="jan@kowalski.pl"
                               value={email}
                               onChangeText={setEmail}
                               autoCapitalize="none"
                               placeholderTextColor={styles.input.color}
                               editable={changeData}
                    />
                </View>
                <View style={localStyles.inputContainer}>
                    <Text style={localStyles.grayText}>Numer telefonu</Text>
                    <TextInput style={styles.input}
                               placeholder="123 456 789"
                               value={phoneNumber}
                               onChangeText={setPhoneNumber}
                               autoCapitalize="none"
                               placeholderTextColor={styles.input.color}
                               editable={changeData}
                    />
                </View>
                <View style={localStyles.inputContainer}>
                    <Text style={localStyles.grayText}>Adres zamieszkania</Text>
                    <TextInput style={styles.input}
                               placeholder="ul. Nowa 7, 33-100 Tarnów"
                               value={homeAddress}
                               onChangeText={setHomeAddress}
                               autoCapitalize="none"
                               placeholderTextColor={styles.input.color}
                               editable={changeData}
                    />
                </View>
                <View style={localStyles.inputContainer}>
                    <Text style={localStyles.grayText}>Data urodzenia</Text>
                    <TextInput style={styles.input}
                               placeholder="01-01-2024"
                               value={birthDate}
                               onChangeText={setBirthDate}
                               autoCapitalize="none"
                               placeholderTextColor={styles.input.color}
                               editable={changeData}
                    />
                </View>
                <View style={styles.separator}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Wyloguj się</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const localStyles = StyleSheet.create({

    forgotPassword: {
        textAlign: 'right',
        fontSize: dimensions.smallTextSize,
        color: colors.appThirdColor,
    },

    editHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 4,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: colors.appThirdColor,
    },

    changeText: {
        fontSize: dimensions.smallTextSize,
        color: colors.appThirdColor,

    },

    grayText: {
        color: colors.appThirdColor,
        fontSize: dimensions.smallTextSize,
        paddingLeft: 10,
    },

    inputContainer: {
        gap: 5,
    },

});
export default Profile;
