import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={style.background}>
            <EvilIcons style={styles.icon} name="search" />
            <TextInput placeholder="Search Countries"></TextInput>
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
    },
    input: {
        flex: 1,
    },

    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },
});

export default SearchBar;
