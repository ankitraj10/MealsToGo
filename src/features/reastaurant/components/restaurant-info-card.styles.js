import React from 'react';
import { View, Image, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

export const Address = styled(Text)`
    font-family:${(props) => props.theme.fonts.body};
    font-size:${(props) => props.theme.fontSizes.caption};
`

export const RestaurantCard = styled(Card)`
    background-color:  ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`

export const Rating = styled.View`
    flex-direction:row;
    padding-bottom:${(props) => props.theme.space[2]};
    padding-top:${(props) => props.theme.space[2]};
`

export const Section = styled.View`
    flex-direction:row;
`

export const SectionEnd = styled.View`
    align-self:center;
    flex-direction:row;
    justify-content:flex-end;
    flex:1
`

export const IsOpen = styled.Text`
    flex-direction:row;
    padding-bottom:${(props) => props.theme.space[2]};
    padding-top:${(props) => props.theme.space[2]};
`

export const Icon = styled(Image)`
    width:15px;
    height:15px;
    alignSelf: center`