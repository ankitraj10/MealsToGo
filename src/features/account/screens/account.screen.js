import React from "react";
import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
} from "../component/account.style";
import { Spacer } from "../../../components/spacer.component";

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                >
                    Login
                </AuthButton>
                <Spacer variant="top" size="large" />
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Register")}
                >
                    Register
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    );
};
