import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {
    Button,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { set } from 'react-native-reanimated';
import CovidAPI from '../api/CovidAPI';
// import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const CountryCard = ({ navigation }) => {
    // Hook for the countries array
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const response = await CovidAPI.get('summary');
                setCountries(response.data.Countries);
            } catch (e) {
                console.log('Unable to fetch data');
                setError('Unable to fetch data');
            }
            // console.log(countries);
        })();
    }, []);

    // Fetches data from Api
    // const countryResponse = async () => {
    //     const response = await CovidAPI.get('summary');
    //     const data = response.data?.Countries;

    //     // console.log(response.data?.Countries[1].Country);
    //     setCountries(data);
    // };
    return (
        // The On press should navigate you to the country details page for that country

        // onPress={() => {
        //     navigation.navigate('Details');
        // }}
        <>
            {countries.map((country) => (
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text
                            key={country.CountryCode}
                            style={styles.countryText}
                        >
                            {country.Country}
                        </Text>
                        <Text>{error}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: 25,
        padding: 25,
        marginHorizontal: 15,
    },
    countryText: {
        color: '#fff',
        fontSize: 30,
    },
});

export default CountryCard;
