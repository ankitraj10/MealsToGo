import React from 'react';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) => {
    const auth = getAuth();
    console.log("test test", auth)
    return signInWithEmailAndPassword(auth, email, password);
};

export const userRegistration = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
}