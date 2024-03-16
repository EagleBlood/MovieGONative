import React, {useState} from 'react';
import {
    Button,
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
import styles from '../styles/styleDark';

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
        <ScrollView style={styles.homeContainer}>
            {/* Welcome div */}
            <View style={styles.welcomeContainer}>
                <View style={styles.welcomeDiv}>
                    <Text style={styles.headerText}>Witaj, |userName|</Text>
                    <Text style={styles.text}>Chcesz iść na film? Kup bilety teraz!</Text>
                </View>
    
                {/*<View style={styles.welcomeMenuDiv}>
                    <TouchableOpacity onPress={() => navigation.navigate('MovieDetails')}>
                        <Text style={styles.button}>ICON</Text>
                    </TouchableOpacity>
                </View>*/}
            </View>

            {/* Calendar div */}
            <View style={styles.calendarContainer}>
                <View style={styles.calendarItem}>
                    <Text style={styles.text}>|day|</Text>
                    <Text style={styles.headerText}>|date|</Text>
                </View>

                <View style={styles.calendarItem}>
                    <Text style={styles.text}>|day|</Text>
                    <Text style={styles.headerText}>|date|</Text>
                </View>
            </View>

            {/* 1PM div */}
            <View style={styles.movieContainer}>
                <Text style={styles.homeHeaderText}>1PM</Text>

                <ScrollView horizontal={true}>
                    <View style={styles.movieDiv}>  
                        {/* change later to ImageBackground */}
                        <TouchableOpacity style={styles.movieItemDiv}> 
                            <Text style={styles.movieTitleItemText}>|movieName|</Text>
                            <Text style={styles.movieScoreItemText}>|score|</Text>
                        </TouchableOpacity>   

                        <TouchableOpacity style={styles.movieItemDiv}> 
                            <Text style={styles.movieTitleItemText}>|movieName|</Text>
                            <Text style={styles.movieScoreItemText}>|score|</Text>
                        </TouchableOpacity>   
                    </View>
                </ScrollView>
                
            </View>

            {/* 4PM div */}

            {/* 7PM div */}

    
            <TouchableOpacity onPress={() => navigation.navigate('MovieDetails')}>
                <Text style={styles.text}>Go to MovieDetails</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.text}>Go to Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tickets')}>
                <Text style={styles.text}>Go to Tickets</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Go to Login</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default Home;