import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ReastaurantsScreen } from "./features/reastaurant/screens/reastaurants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme"
const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ReastaurantsScreen />
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
};

export default App; 
