import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme";
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./services/restraunts/restraunts.context";
import { LocationContextProvider } from "./services/location/location.context";
import { FavouriteContextProvider } from "./services/favourites/favourite.context";
import { Navigation } from "./infrastructure/navigation/index";

const App = () => {
    let [oswaldLoded] = useOswald({
        Oswald_400Regular,
    });
    let [latoLoded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoded || !latoLoded) {
        return null;
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <FavouriteContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation />
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavouriteContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
};

export default App;
