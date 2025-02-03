import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer.component";
import { CompactRestaurantInfo } from "../../features/reastaurant/components/compact-restaurant-info.component";
import { Text } from "../typography.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouriteBar = ({ favourites, onNavigate }) => {

    if (!favourites.length) {
        return null;
    }
    return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favourites</Text>
            </Spacer>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    console.log("favorites 90", key)
                    return (
                        <>
                            <Spacer key={key} variant="left" size="medium"> </Spacer>
                            <TouchableOpacity
                                onPress={() =>
                                    onNavigate("RestaurantDetail", {
                                        restaurant,
                                    })
                                }
                            >
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </>

                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    );
};