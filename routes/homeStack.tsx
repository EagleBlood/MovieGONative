import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import MovieDetailsScreen from '../screens/MovieDetails';
import HallScreen from '../screens/Hall';
import LoginScreen from '../screens/Login';
import ForgotPassScreen from '../screens/ForgotPass';
import RegisterScreen from '../screens/Register';
import ProfileScreen from '../screens/Profile';
import TicketsScreen from '../screens/Tickets';

// Declare the stack
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen name="Hall" component={HallScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tickets" component={TicketsScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;