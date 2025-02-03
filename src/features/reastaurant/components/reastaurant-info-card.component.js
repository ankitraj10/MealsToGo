import React from 'react';
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { Favorite } from "../../../components/favourite/favourite.component"
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer.component";
import { Text } from "../../../components/typography.component"
import {
    Address,
    RestaurantCard,
    RestaurantCardCover,
    Info,
    Rating,
    Section,
    SectionEnd,
    IsOpen,
    Icon
} from "./restaurant-info-card.styles"


export const RestaurantInfoCard = ({ restaurant = {}, theme }) => {
    const {
        name,
        icon,
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address,
        isOpenNow = true,
        rating = 2,
        isClosedTemporarily = true,
        vicinity
    } = restaurant.item;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={2} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Favorite restaurant={restaurant.item} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((item, index) => (
                            <SvgXml width={20} height={20} xml={star} key={`star-${index}`} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error" style={{ color: "red", alignSelf: "center" }}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer variant="left" size="medium" />
                        {isOpenNow && <IsOpen> <SvgXml width={25} height={25} xml={open} /> </IsOpen>}
                        <View style={{ paddingLeft: 16 }} />
                        <Icon source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Text variant="caption">{address}</Text>
            </Info>
        </RestaurantCard>
    )
};