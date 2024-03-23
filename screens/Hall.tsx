import React from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/styleDark';
import { ScrollView } from 'react-native-gesture-handler';

type RootStackParamList = {
  Home: undefined;
  Hall: undefined;
};


type NavigationProp = StackNavigationProp<RootStackParamList, 'Hall'>;

const numRows = 8;
const numColumns = 9;

// Generate some mock data
const data = Array.from({ length: numRows * numColumns }, (_, i) => ({
  id: i,
  row: Math.floor(i / numColumns) + 1,
  col: (i % numColumns) + 1,
  reserved: Math.random() > 0.5, // Randomly mark some seats as reserved
}));

interface Seat {
  id: number;
  row: number;
  col: number;
  reserved: boolean;
}

const renderItem = ({ item }: { item: Seat }) => {
  const { row, col, reserved } = item;
  const seat = `${row}:${col}`;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.hallSeatItem,
        reserved ? styles.hallSeatReserved : pressed ? styles.hallSeatSelected : styles.hallSeatAvailable,
      ]}
      disabled={reserved}
      onPress={() => {
        console.log(`Seat ${seat} pressed`);
        // Handle seat selection logic here
      }}
    >
      {/* <Text style={{ color: 'white', textAlign: 'center' }}>{seat}</Text> */}
    </Pressable>
  );
};


const Hall = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.containerNoPadding}>

      <View style={styles.hallSelectionContainer}>
          

        <View style={styles.hallTitleDiv}>
          <Text style={styles.headerText}>|movieTitle|</Text>
        </View>

        <View style={styles.hallSeatsDiv}>
          <FlatList
            contentContainerStyle={{ alignItems: 'center' }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            removeClippedSubviews
          />
        </View>

        <View style={styles.hallTitleDiv}>
          <Text style={styles.headerText}>|hallNumb|</Text>
        </View>
        

        <View style={styles.hallSeatsDescDiv}>
          <Text style={styles.text}>Wybrane</Text>
          <Text style={styles.text}>Dostępne</Text>
          <Text style={styles.text}>Zarezerwowane</Text>
        </View>

      </View>

      <View style={styles.hallSeatsSelectionContainer}>
        <View style={styles.hallItemDiv}>
          <Text style={styles.hallTitleItemText}>Wybrane miejsca:</Text>
          <Text style={styles.hallScoreItemText}>|info|</Text>
        </View>

        <View style={styles.hallSelectedSeatsDiv}>
          <View style={styles.hallSelectedSeatsItem}>
            <Text style={styles.hallSelectedSeatsItemText}>|row/col|</Text>
            <Text style={styles.textSec}>|ticketType|</Text>
            <Text style={styles.textDim}>cena:</Text>
            <Text style={styles.textSec}>|price|</Text>
          </View>
        </View>

        <View style={styles.hallSelectedSeatsFinalizeDiv}>
          <Text style={styles.hallPriceHeaderTextSec}>|totalPrice|</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Kup bilet</Text>
          </TouchableOpacity>
        </View>

      </View>





      {/*<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />*/}
    </ScrollView>
  );
};

export default Hall;