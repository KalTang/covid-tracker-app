import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import CovidAPI from '../api/CovidAPI';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
    const [country, setCountry] = useState([]);

    // useEffect(() => {
    //     countryResponse();
    // }, []);

    // const countryResponse = async () => {
    //     const response = await CovidAPI.get('summary');
    //     console.log(response.data.Country);
    // };

    return (
        <View style={styles.container}>
            <AntDesign name="search1" size={24} color="white" />
            <TextInput
                style={styles.textField}
                placeholder="Search Countries"
                placeholderTextColor="#808080"
                // value={term}
            ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 50,
        borderRadius: 6,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#b73535',
    },

    textField: {
        color: '#fff',
        fontSize: 25,
        flex: 1,
    },
});

export default SearchBar;
