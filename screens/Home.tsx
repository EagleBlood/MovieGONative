import React, {useEffect, useRef, useState} from 'react';
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

interface ItemLayout {
    isToday: boolean;
    x: number;
    width: number;
}

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

function generateDates() {
    const dates = [];
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const days = ['Niedz.', 'Pon.', 'Wt', 'Śr.', 'Czw.', 'Pt.', 'Sob.'];
  
    // 1 week backwards
    for (let i = 7; i > 0; i--) {
      const newDate = new Date(today.getTime() - (i * oneDay));
      dates.push({ day: days[newDate.getDay()], date: newDate.getDate(), isToday: false });
    }
  
    // Today
    dates.push({ day: days[today.getDay()], date: today.getDate(), isToday: true });
  
    // 2 weeks ahead
    for (let i = 1; i <= 14; i++) {
      const newDate = new Date(today.getTime() + (i * oneDay));
      dates.push({ day: days[newDate.getDay()], date: newDate.getDate(), isToday: false });
    }
  
    return dates;
  }

function Home({ navigation}: Props): React.JSX.Element {
    const scrollViewRef = useRef<ScrollView | null>(null);
    const [itemLayouts, setItemLayouts] = useState<ItemLayout[]>([]); // This is the correct place for this line
    
    useEffect(() => {
        const todayIndex = itemLayouts.findIndex(item => item.isToday);
        if (todayIndex !== -1) {
            const scrollPosition = itemLayouts.slice(0, todayIndex).reduce((total, item) => total + item.width, 0);
            scrollViewRef.current?.scrollTo({ x: scrollPosition - (itemLayouts[todayIndex].width / 2), animated: true });
        }
    }, [itemLayouts]);
    
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
            <ScrollView horizontal={true} ref={scrollViewRef}>
                <View style={styles.calendarContainer}>
                    {generateDates().map((date, index) => (
                        <View
                            key={index}
                            onLayout={(event) => {
                                const { x, width } = event.nativeEvent.layout;
                                setItemLayouts(prev => [...prev, { isToday: date.isToday, x, width }]);
                            }}
                            style={date.isToday ? styles.calendarItemCurrent : styles.calendarItem}
                        >
                            <Text style={styles.text}>{date.day}</Text>
                            <Text style={styles.headerText}>{date.date}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

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