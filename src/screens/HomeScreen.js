import React from 'react';
import { Button, StyleSheet, Image, Text, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const HomePage = () => {
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
                Total Covid Cases:
                <Text style={styles.bannerText}> 500</Text>
            </Text>

            {/* Displays world wide total Death numbers*/}
            <Text style={styles.deathBanner}>
                Total Covid Deaths:
                <Text style={styles.bannerText}></Text>1000{' '}
            </Text>

            {/* Button that will lead to the search screen*/}
            {/* <TouchableOpacity> */}
            <Text style={styles.button}>Start!</Text>
            {/* </TouchableOpacity> */}
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
        fontSize: 20,
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
