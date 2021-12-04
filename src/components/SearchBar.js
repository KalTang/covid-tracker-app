import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textField}
                placeholder="Search Countries"
                placeholderTextColor="#808080"
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
