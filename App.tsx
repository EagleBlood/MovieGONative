import 'react-native-gesture-handler';
import 'react-native-screens';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'; // Import your Home screen
import MovieDetails from './screens/MovieDetails';
import Profile from './screens/Profile';
import Tickets from './screens/Tickets';
import Hall from './screens/Hall';
import Login from './screens/Login';
import ForgotPass from './screens/ForgotPass';
import Register from './screens/Register';

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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MovieDetails" component={MovieDetails} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Tickets" component={Tickets} />
          <Stack.Screen name="Hall" component={Hall} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;