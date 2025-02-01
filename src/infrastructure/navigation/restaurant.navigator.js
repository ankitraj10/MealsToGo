import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { ReastaurantsScreen } from "../../features/reastaurant/screens/reastaurants.screens";
import { RestaurantDetails } from "../../features/reastaurant/screens/restaurant-details.screens";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS }}>
            <RestaurantStack.Screen name="Restaurant" component={ReastaurantsScreen} />
            <RestaurantStack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        </RestaurantStack.Navigator>
    );
};
