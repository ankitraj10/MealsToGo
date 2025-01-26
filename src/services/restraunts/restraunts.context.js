import React, { createContext, useState, useEffect, useContext } from 'react';
import { restaurantsRequest, restaurantsTransform } from "./restraunts.service";
import { LocationContext } from "../location/location.context"




export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retriveRestraunts = async () => {
        const locationString = `${location.lat},${location.lng}`
        setIsloading(true);
        try {
            const restaurantResult = await restaurantsRequest(locationString);
            setRestaurants(restaurantResult);
        } catch (err) {
            setError(err.message || "An error occurred");
        } finally {
            setIsloading(false);
        }
    }

    const loadRestaurants = () => {
        setIsloading(true);
        setTimeout(() => retriveRestraunts(), 2000)
    }

    useEffect(() => {
        loadRestaurants()
    }, [])

    const value = { restaurants: restaurantsTransform(restaurants), isLoading, error, loadRestaurants };
    return (
        <RestaurantsContext.Provider value={value}>
            {children}
        </RestaurantsContext.Provider>
    );
};
