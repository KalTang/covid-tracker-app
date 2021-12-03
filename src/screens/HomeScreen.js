import React, { useState, useEffect } from 'react';
import {
    Button,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import covidAPI from '../api/CovidAPI';
const HomePage = () => {
    const [totalConfirmed, setTotalConfirmed] = useState(0);
    const [totalDeaths, setTotalDeaths] = useState(0);

    useEffect(() => {
        covidResponse();
    }, []);

    const covidResponse = async () => {
        const response = await covidAPI.get('world/total');
        console.log(response.data);
        setTotalConfirmed(response.data.TotalConfirmed);
        setTotalDeaths(response.data.TotalDeaths);
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

            {/* Displays world wide total Covid case numbers*/}
            <Text style={styles.caseBanner}>
                {' '}
                Total Covid Cases:
                <Text style={styles.bannerText}>{totalConfirmed}</Text>
            </Text>

            {/* Displays world wide total Death numbers*/}
            <Text style={styles.deathBanner}>
                Total Covid Deaths:
                <Text style={styles.bannerText}>{totalDeaths}</Text>{' '}
            </Text>

            {/* Button that will lead to the search screen*/}
            <TouchableOpacity>
                <Text style={styles.button}>Search</Text>
            </TouchableOpacity>
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
        fontSize: 50,
        color: '#b73535',
        fontWeight: '800',
    },
    logo: {
        width: '50%',
        height: '20%',
        marginBottom: '6%',
        marginTop: '3%',
    },
    caseBanner: {
        backgroundColor: '#226fb7',
        margin: 10,
        padding: 20,
        paddingLeft: '29%',
        paddingRight: '29%',
        fontSize: 23,
    },
    deathBanner: {
        backgroundColor: '#b73535',
        margin: 10,
        padding: 20,
        paddingLeft: '29%',
        paddingRight: '29%',
        fontSize: 23,
    },
    bannerText: {
        color: '#fff',
        fontSize: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: '#fff',
        fontSize: 20,
        backgroundColor: '#38a801',
        padding: 15,
    },
});

export default HomePage;
