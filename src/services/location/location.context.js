import React, { createContext, useState, useEffect } from 'react';
import { locationRequest, locationTransform } from "./location.service"




export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState("san francisco")

    const onSearch = async (searchKeyWord) => {
        setIsloading(true);
        setKeyword(searchKeyWord);

        if (searchKeyWord.length == 0 || keyword.length == 0) {
            return;
        }

        try {
            const locationResult = await locationRequest(searchKeyWord || keyword);
            if (locationResult) {
                setLocation(locationTransform(locationResult));
                setIsloading(false)
            }
        } catch (err) {
            setError(err.message || "An error occurred");
        }
    }

    useEffect(() => {
        setIsloading(true);
        onSearch(keyword)
    }, [])

    const value = { location, isLoading, error, keyword, search: (data) => onSearch(data) };
    return (
        <LocationContext.Provider value={value}>
            {children}
        </LocationContext.Provider>
    );
};
