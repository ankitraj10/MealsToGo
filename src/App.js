import React, { useEffect, useState } from "react";
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
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBD_c8RLGsjPdDqcjIUbEhQGGgNUd1tYXE",
    authDomain: "mealstogo-8fb29.firebaseapp.com",
    projectId: "mealstogo-8fb29",
    storageBucket: "mealstogo-8fb29.firebasestorage.app",
    messagingSenderId: "1009030270876",
    appId: "1:1009030270876:web:4de2b4af0228557a6fc259",
};

const app = initializeApp(firebaseConfig);

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, "ankit@gmail.com", "Incognito@9852")
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user authenticated", user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("user does not exist", errorCode)
            });
    }, [])

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
