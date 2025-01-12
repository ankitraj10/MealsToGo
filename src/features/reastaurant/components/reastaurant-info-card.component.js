import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';

export const RestaurantInfoCard = ({ restaurant = {} }) => {

    const Title = styled.Text`
     padding: 16px;
     color:red;
     backgroundColor:yellow;
    `;

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
        <Card elevation={2} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Title >{name}</Title>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 16, backgroundColor: "white" },
    title: { padding: 16 }
})