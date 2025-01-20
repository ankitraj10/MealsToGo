import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const Spacer = ({ variant = "top", size = "small", spaceType = "margin" }) => {
    const spacerVariant = {
        top: `${spaceType}-top`,
        right: `${spaceType}-right`,
        bottom: `${spaceType}-bottom`,
        left: `${spaceType}-left`,
    };
    const spacerSizes = {
        small: (props) => props.theme.space[1],
        medium: (props) => props.theme.space[2],
        large: (props) => props.theme.space[3],
    };

    const SpacerVariant = styled(View)`
    ${spacerVariant[variant]}:${spacerSizes[size]}
    `

    return <SpacerVariant />

}
