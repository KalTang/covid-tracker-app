import React, { useState, useEffect } from 'react';
import {
    Button,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import covidAPI from '../api/CovidAPI';

const HomePage = ({ navigation }) => {
    // const navigation = useNavigation();

    // Hooks
    const [totalConfirmed, setTotalConfirmed] = useState(0);
    const [totalDeaths, setTotalDeaths] = useState(0);
    const [newConfirmed, setNewConfirmed] = useState(0);
    const [newDeaths, setNewDeaths] = useState(0);
    const [newDate, setNewDate] = useState('');

    useEffect(() => {
        covidResponse();
    }, []);

    // API Call
    const covidResponse = async () => {
        const response = await covidAPI.get('summary');
        console.log(response.data.Global);
        // API Data
        setTotalConfirmed(response.data.Global.TotalConfirmed);
        setTotalDeaths(response.data.Global.TotalDeaths);
        setNewConfirmed(response.data.Global.NewConfirmed);
        setNewDeaths(response.data.Global.NewDeaths);
        setNewDate(response.data.Global.Date);
    };

    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Covid Tracker</Text>
            {/* Logo image*/}
            <Image
                style={styles.logo}
                source={require('../../assets/covidLogo.png')}
            />
            {/* mini title */}

            <Text style={styles.title2}>Global Stats</Text>

            {/* Convid stats info container  */}
            <View style={styles.textContainer}>
                {/* Displays world wide total Covid case numbers*/}
                <Text style={styles.bannerText}>Cases: {totalConfirmed}</Text>

                {/* Displays world wide total Death numbers*/}
                <Text style={styles.bannerText}>Deaths: {totalDeaths}</Text>

                {/* New cases */}
                <Text style={styles.bannerText}>New Cases: {newConfirmed}</Text>

                {/* New deaths */}
                <Text style={styles.bannerText}>New Deaths: {newDeaths}</Text>
            </View>

            {/* Button that will lead to the search screen*/}
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Search');
                }}
            >
                <Text style={styles.button}>Search</Text>
            </TouchableOpacity>

            {/* last update */}
            <Text style={styles.dateText}>Last updated: {newDate}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 40,
        color: '#b73535',
        fontWeight: '800',
    },
    title2: {
        fontSize: 30,
        color: '#b73535',
        fontWeight: '600',
        marginBottom: 10,
    },

    logo: {
        width: '40%',
        height: '18%',
        marginBottom: '6%',
        marginTop: '3%',
    },
    textContainer: {
        borderWidth: 7,
        borderColor: '#226fb7',
        padding: 15,
    },
    bannerText: {
        color: '#38a801',
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: '#fff',
        fontSize: 20,
        backgroundColor: '#b73535',
        padding: 15,
        marginTop: '5%',
    },
    dateText: {
        color: '#808080',
        fontSize: 17,
        marginTop: '5%',
    },
});

export default HomePage;
