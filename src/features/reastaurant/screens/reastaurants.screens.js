import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/reastaurant-info-card.component"

export const ReastaurantsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.search}>
                <Searchbar placeholder="Search" />
            </View>
            <View style={styles.list}>
                <RestaurantInfoCard />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    search: {
        padding: 5
    },
    list: {
        padding: 5
    }
})