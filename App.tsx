import 'react-native-gesture-handler';
import 'react-native-screens';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import MovieDetails from './screens/MovieDetails';
import Profile from './screens/Profile';
import Tickets from './screens/Tickets';
import Hall from './screens/Hall';
import Login from './screens/Login';
import ForgotPass from './screens/ForgotPass';
import Register from './screens/Register';
import styles from './styles/styleApp';

type RootStackParamList = {
  Home: undefined;
  MovieDetails: undefined;
  Profile: undefined;
  Tickets: undefined;
  Hall: undefined;
  Login: undefined;
  ForgotPass: undefined;
  Register: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="Tickets" component={Tickets} options={{ headerShown: false }} />
          <Stack.Screen name="Hall" component={Hall} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


export default App;