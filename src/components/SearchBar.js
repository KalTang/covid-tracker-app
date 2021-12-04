import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <EvilIcons style={styles.icon} name="search" />
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
        height: 50,
        borderRadius: 6,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#b73535',
    },
    //     flex: 1,
    // },

    icon: {
        fontSize: 55,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
    textField: {
        color: '#fff',
        fontSize: 25,
    },
});

export default SearchBar;
