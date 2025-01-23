import React, { createContext } from 'react';

// Assuming restaurantsRequest and restaurantsTransform are used elsewhere, remove them if not needed
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const value = { restaurants: [1, 2, 4] }; // Replace with dynamic value if needed

    return (
        <RestaurantsContext.Provider value={value}>
            {children}
        </RestaurantsContext.Provider>
    );
};
