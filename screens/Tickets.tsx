import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from '../styles/styleDark';

type RootStackParamList = {
  Home: undefined;
  Tickets: undefined;
};


type NavigationProp = StackNavigationProp<RootStackParamList, 'Tickets'>;

const Tickets = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  }
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>


      <View style={styles.ticketItemDiv}>
        <View style={styles.ticketDiv}>
          <Text style={styles.headerText}>|movieTitle|</Text>
          <View style={styles.ticketInfoDiv}>
            <Text style={styles.text}>Numer rezerwacji: |id|</Text>
            <Text style={styles.text}>Data rezerwacji: |time|</Text>
            <Text style={styles.text}>Miejsca: |seats|</Text>
          </View>
        
          <TouchableOpacity style={styles.ticketExpandText} onPress={handlePress}>
            <Text style={styles.ticketExpandText}>
              {isExpanded ? 'Mniej szczegółów' : 'Więcej szczegółów'}
            </Text>
          </TouchableOpacity>
        </View>

        {isExpanded && (
          <View style={styles.ticketExpandedDiv}>
            <Text style={styles.headerText}>Zarezerwowane miejsca</Text>
            <View style={styles.ticketExpandedInfoDiv}>
              <Text style={styles.ticketSeatText}>|seatBox|</Text>
              <Text style={styles.ticketTypeText}>|ticketType|</Text>
              <Text style={styles.textDim}>cena: <Text style={styles.headerText}>|price|</Text></Text>
            </View>
            <Text style={styles.ticketFinallText}>Zapłacono: |totalPrice|</Text>
          </View>
        )}

      </View>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />


    </ScrollView>
  );
};

export default Tickets;