import React, { createContext, useState } from "react";

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {

        setFavourites([restaurant, ...favourites]);
    };

    const remove = (restaurant) => {
        const newRestaurant = favourites.filter(
            (x) => x.placeId !== restaurant.placeId
        );
        setFavourites(newRestaurant);
    };
    console.log("favourite", favourites)
    return (
        <FavouriteContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove,
            }}
        >
            {children}
        </FavouriteContext.Provider>
    );
};
