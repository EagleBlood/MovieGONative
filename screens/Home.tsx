import React, {useState} from 'react';
import {
    Modal,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Buffer } from 'buffer';

type RootStackParamList = {
    Home: undefined;
    MovieDetails: undefined;
    Profile: undefined;
    Tickets: undefined;
    Login: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function Home({ navigation}: Props): React.JSX.Element {
    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MovieDetails')}>
                <Text>Go to MovieDetails</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text>Go to Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tickets')}>
                <Text>Go to Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Go to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;