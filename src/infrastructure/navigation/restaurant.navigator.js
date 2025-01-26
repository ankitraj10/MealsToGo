import React from "react";
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { ReastaurantsScreen } from "../../features/reastaurant/screens/reastaurants.screens";

const ReastaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <ReastaurantStack.Navigator screenOptions={{ headerShown: false }}>
            <ReastaurantStack.Screen name="Restraunt" component={ReastaurantsScreen} />
            <ReastaurantStack.Screen name="RestrauntDetails" component={() => <Text>Restaurant details screen</Text>} />
        </ReastaurantStack.Navigator>
    )
}