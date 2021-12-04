import React from 'react';
import {
    Button,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
// import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const CountryCard = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.countryText}>Canada</Text>
            </View>
        </TouchableOpacity>
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
