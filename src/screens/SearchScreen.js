import React from 'react';
import {
    Button,
    StyleSheet,
    Image,
    Text,
    View,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import CountryCard from '../components/CountryCard';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    return (
        <View style={styles.searchContainer}>
            <SearchBar />
            <ScrollView>
                <CountryCard />
            </ScrollView>
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
