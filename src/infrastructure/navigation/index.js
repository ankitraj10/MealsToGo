import React, { useContext } from 'react';
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator"

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext)
    return isAuthenticated ? <AppNavigator /> : <AccountNavigator />
} 