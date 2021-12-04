import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <TextInput
                style={styles.textField}
                placeholder="Search Countries"
                placeholderTextColor="#fff"
            ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        height: 50,
        borderRadius: 6,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#b73535',
    },

    textField: {
        color: '#fff',
        fontSize: 25,
        flex: 1,
    },
});

export default SearchBar;
