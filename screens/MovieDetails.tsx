import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';

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
    
    <View>
      <Text>Movie Details Screen</Text>
      <Text>This is some random text.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Hall')}>
            <Text>Go to Hall</Text>
        </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;