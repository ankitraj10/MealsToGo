import React, { createContext, useState, useEffect } from 'react';
import { restaurantsRequest, restaurantsTransform } from "./restraunts.service";




export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const retriveRestraunts = async () => {
        setIsloading(true);
        const restrauntResult = await restaurantsRequest();
        console.log("restraunt result", restaurants)
        setRestaurants(restrauntResult)
    }

    useEffect(() => { retriveRestraunts() }, [])

    const value = { restaurants: restaurantsTransform(restaurants) };
    return (
        <RestaurantsContext.Provider value={value}>
            {children}
        </RestaurantsContext.Provider>
    );
};
