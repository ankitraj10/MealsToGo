import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.success};
`;
const RestaurantCard = styled(Card)`
background-color:  ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};

`;

export const RestaurantInfoCard = ({ restaurant = {}, theme }) => {
    console.log("test test", theme)
    const {
        name = "some restaurant name",
        icon = "",
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = "100 some random street",
        isOpenNow = true,
        rating = "",
        isClosedTemporarily = ""
    } = restaurant;

    return (
        <RestaurantCard elevation={2} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title >{name}</Title>
        </RestaurantCard>
    )
};