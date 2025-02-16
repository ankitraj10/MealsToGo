import React, { useState, useContext } from "react";
import {
    AccountBackground,
    AccountContainer,
    AuthButton,
} from "../component/account.style";
import { TextInput } from "react-native-paper";
import { View } from "react-native";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography.component";
import { Spacer } from "../../../components/spacer.component";

const LoginContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding-top: ${(props) => props.theme.space[4]};
  padding-bottom: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
`;

const TextContainer = styled.View`
  margin: 10px;
  width: 300px;
  align-self: center;
`;

const LoginTitle = styled.Text`
font-size:30px;
margin-bottom:10px;

`

const LoginButton = styled(Button).attrs({
    buttonColor: colors.brand.primary,
    textColor: "#fff",
})`
  border-radius: 5px;
  padding: 5px;
`;

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error } = useContext(AuthenticationContext);

    const handleLogin = () => {
        if (email.length > 0 && password.length > 0) {
            onLogin(email, password);
        }
    };
    console.log("error", error && error.code, error && error.message);
    return (
        <AccountBackground>
            <LoginTitle>Meals To Go</LoginTitle>
            <LoginContainer>
                <TextContainer>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </TextContainer>
                <TextContainer>
                    <TextInput
                        label="Password"
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </TextContainer>
                {error && (
                    <View style={{ marginLeft: 10 }}>
                        <Spacer variant="top" size="small" />
                        <Text center variant="error" numberOfLines={3}>
                            {error}
                        </Text>
                    </View>
                )}

                <TextContainer>
                    <LoginButton icon="lock-open-outline" onPress={() => handleLogin()}>
                        LOGIN
                    </LoginButton>
                </TextContainer>
            </LoginContainer>
            <Spacer variant="top" size="large" />
            <AuthButton mode="contained" onPress={() => navigation.goBack()}>Back</AuthButton>
        </AccountBackground>
    );
};
