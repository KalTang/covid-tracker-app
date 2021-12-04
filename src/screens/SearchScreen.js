import React from 'react';
import {
    Button,
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.searchContainer}>
            <SearchBar />
            <CountryCard />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#121212',
        height: '100%',
    },
});

export default SearchScreen;
