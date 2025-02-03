import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouriteContext } from "../../services/favourites/favourite.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 45px;
  right: 45px;
  z-index: 9;
`;

export const Favorite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouriteContext);
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
    const favouriteIcon = isFavourite ? "heart" : "hearto";
    const favouriteColor = isFavourite ? "red" : "white";

    const handleFavouriteClick = () => {
        if (isFavourite) {
            removeFromFavourites(restaurant)
        } else {
            addToFavourites(restaurant)
        }

    }
    return (
        <FavouriteButton onPress={() => handleFavouriteClick()}>
            <AntDesign name={favouriteIcon} size={24} color={favouriteColor} />
        </FavouriteButton>
    );
};
