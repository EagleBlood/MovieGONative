import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Touchable, TouchableOpacity, ScrollView, Button } from 'react-native';
import styles from '../styles/styleDark';

type RootStackParamList = {
    Home: undefined;
    MovieDetails: undefined;
    Hall: undefined;
  };
  
  type MovieDetailsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'MovieDetails'
  >;

const MovieDetails = () => {
    const navigation = useNavigation<MovieDetailsScreenNavigationProp>();
    return (
      <ScrollView style={styles.homeContainer}>
        <View style={styles.movieDetailsPoster}>
          {/* <Image source={require('../assets/poster.jpg')} style={styles.movieDetailsPosterImage} /> */}
        </View>

        <View style={styles.movieDetailsInfoDiv}>
          <View style={styles.movieDetailsTitleDiv}>
            <Text style={styles.headerText}>|movieTitle|</Text>
            <Text style={styles.text}>|movieScore|</Text>
          </View>

          <Button title="Kup bilet" onPress={() => navigation.navigate('Hall')} />

          <View style={styles.movieDetailsTypeDiv}>
            <Text style={styles.text}>|movieType|</Text>
            <Text style={styles.text}>|movieDuration|</Text>
          </View>

          <View style={styles.movieDetailsDescDiv}>
            <Text style={styles.headerText}>|movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc||movieDesc|</Text>
          </View>
        </View>

      </ScrollView>
  );
};

export default MovieDetails;