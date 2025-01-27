import React from 'react';
import { RestaurantInfoCard } from "../components/reastaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component"

export const RestaurantDetails = ({ route }) => {
    const { restaurantsDetail } = route.params;
    return (
        <SafeArea >
            {<RestaurantInfoCard restaurant={restaurantsDetail} />}
        </SafeArea>
    );
};
