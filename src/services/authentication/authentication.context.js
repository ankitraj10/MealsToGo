import React, { useState, createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    return (
        <AuthenticationContextProvider.Provider>
            {children}
        </AuthenticationContextProvider.Provider>
    );
};
