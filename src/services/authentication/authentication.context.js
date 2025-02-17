import React, { useState, createContext } from "react";
import { loginRequest, userRegistration } from "./authentication.service";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthenticationContext = createContext();



export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            setUser(user);
            setIsLoading(false);
            setIsAuthenticated(true);
        } else {
            setUser(null);
            setIsLoading(false);
            setIsAuthenticated(false);
        }
    });

    const getErrorMessage = (errorCode) => {
        console.log("error message", errorCode)
        const errorMessages = {
            "auth/invalid-credential": "The email address is not valid. Please enter a correct email.",
            "auth/user-disabled": "This account has been disabled. Please contact support.",
            "auth/user-not-found": "No user found with this email. Please check or sign up.",
            "auth/wrong-password": "Incorrect password. Please try again.",
            "auth/email-already-in-use": "This email is already registered. Try logging in.",
            "auth/weak-password": "Your password is too weak. Use a stronger one.",
            "auth/network-request-failed": "Network error. Please check your internet connection.",
            "auth/too-many-requests": "Too many failed attempts. Try again later.",
        };

        return errorMessages[errorCode] || "An unexpected error occurred. Please try again.";
    };

    const onLogin = (email, password) => {
        console.log("login hit", email, password)
        loginRequest(email, password).then((user) => {
            setUser(user);
            setIsLoading(false);
            setIsAuthenticated(true);
        }).catch((error) => {
            setIsLoading(false);
            const errorMessage = getErrorMessage(error.code);
            setError(errorMessage);
        })
    }

    const onRegister = (email, password, repeatedPassword) => {
        if (email.length == 0 || password.length == 0 || repeatedPassword.length == 0) {
            return;
        }
        if (password === repeatedPassword) {
            userRegistration(email, password).then((user) => {
                setUser(user);
                setIsLoading(false);
                setIsAuthenticated(true);
            }).catch((error) => {
                setIsLoading(false);
                const errorMessage = getErrorMessage(error.code);
                setError(errorMessage);
            })
        } else {
            setError("Please enter same password");
        }
    }

    const onLogout = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            setUser(null);
            setIsLoading(false);
            setIsAuthenticated(false);
        }).catch((error) => {

        });
    }

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
                isAuthenticated,
                onRegister
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
