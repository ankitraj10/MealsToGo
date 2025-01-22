import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ReastaurantsScreen } from "./features/reastaurant/screens/reastaurants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme";
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();
const App = () => {
    let [oswaldLoded] = useOswald({
        Oswald_400Regular,
    });
    let [latoLoded] = useLato({
        Lato_400Regular,
    });

    const icons = {
        Restaurant: {
            focused: 'restaurant-outline',
            default: 'restaurant',
        },
        Map: {
            focused: 'map-outline',
            default: 'map-sharp',
        },
        Settings: {
            focused: 'settings-outline',
            default: 'settings',
        },
    };


    if (!oswaldLoded || !latoLoded) {
        return null;
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <Tab.Navigator screenOptions={({ route }) => {
                    return {
                        tabBarIcon: ({ focused, color, size }) => {
                            const iconName = focused
                                ? icons[route.name].focused
                                : icons[route.name].default;

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    };
                }}>
                    <Tab.Screen name="Restaurant" component={ReastaurantsScreen} />
                    <Tab.Screen name="Map" component={() => <View><Text>I am map component</Text></View>} />
                    <Tab.Screen name="Settings" component={() => <View><Text>I am settings component</Text></View>} />
                </Tab.Navigator>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
};

export default App; 
