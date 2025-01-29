import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ReastaurantsScreen } from "../../features/reastaurant/screens/reastaurants.screens";
import { View, Text } from "react-native";
import { RestaurantNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

export const AppNavigator = () => {
    const Tab = createBottomTabNavigator();

    const handleNavigationOptions = (route) => {
        const icons = {
            Restaurant: {
                focused: "restaurant-outline",
                default: "restaurant",
            },
            Map: {
                focused: "map-outline",
                default: "map-sharp",
            },
            Settings: {
                focused: "settings-outline",
                default: "settings",
            },
        };

        return {
            tabBarIcon: ({ focused, color, size }) => {
                const iconName = focused
                    ? icons[route.name].focused
                    : icons[route.name].default;

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
        };
    };
    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => handleNavigationOptions(route)}
            >
                <Tab.Screen name="Restaurant" component={RestaurantNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen
                    name="Settings"
                    component={() => (
                        <View>
                            <Text>I am settings component</Text>
                        </View>
                    )}
                />
            </Tab.Navigator>
        </>
    );
};
