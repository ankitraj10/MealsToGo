import React from "react";
import { Text } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { ReastaurantsScreen } from "../../features/reastaurant/screens/reastaurants.screens";
import { RestaurantDetails } from "../../features/reastaurant/screens/restaurant-details.screens";

const ReastaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <ReastaurantStack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS }} >
            <ReastaurantStack.Screen name="Restraunt" component={ReastaurantsScreen} />
            <ReastaurantStack.Screen name="RestrauntDetails" component={RestaurantDetails} />
        </ReastaurantStack.Navigator>
    )
}