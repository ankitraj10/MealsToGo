import React, { createContext, useState, useEffect } from 'react';
import { restaurantsRequest, restaurantsTransform } from "./restraunts.service";




export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const retriveRestraunts = async () => {
        setIsloading(true);

        try {
            const restaurantResult = await restaurantsRequest();
            setRestaurants(restaurantResult);
        } catch (err) {
            setError(err.message || "An error occurred");
        } finally {
            setIsloading(false);
        }
    }

    useEffect(() => { setIsloading(true); setTimeout(() => retriveRestraunts(), 5000) }, [])

    const value = { restaurants: restaurantsTransform(restaurants), isLoading, error };
    return (
        <RestaurantsContext.Provider value={value}>
            {children}
        </RestaurantsContext.Provider>
    );
};
