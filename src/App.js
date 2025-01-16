import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ReastaurantsScreen } from "./features/reastaurant/screens/reastaurants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
const App = () => {
    let [oswaldLoded] = useOswald({
        Oswald_400Regular,
    });
    let [latoLoded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoded || !latoLoded) {
        return null;
    }
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
