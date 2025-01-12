import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ReastaurantsScreen } from "./features/reastaurant/screens/reastaurants.screens"

const App = () => {
    return (
        <>
            <ReastaurantsScreen />
            <ExpoStatusBar style="auto" />
        </>
    );
};

export default App; 
