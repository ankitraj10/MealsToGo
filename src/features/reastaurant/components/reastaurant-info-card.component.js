import React from 'react';
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer.component"

const Title = styled(Text)`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family:${(props) => props.theme.fonts.heading};
    font-size:${(props) => props.theme.fontSizes.body};
`;

const Address = styled(Text)`
    font-family:${(props) => props.theme.fonts.body};
    font-size:${(props) => props.theme.fontSizes.caption};
`

const RestaurantCard = styled(Card)`
    background-color:  ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`

const Rating = styled.View`
    flex-direction:row;
    padding-bottom:${(props) => props.theme.space[2]};
    padding-top:${(props) => props.theme.space[2]};
`

const Section = styled.View`
    flex-direction:row;
`

const SectionEnd = styled.View`
    align-self:center;
    flex-direction:row;
    justify-content:flex-end;
    flex:1
`

const IsOpen = styled.View`
    flex-direction:row;
    padding-bottom:${(props) => props.theme.space[2]};
    padding-top:${(props) => props.theme.space[2]};
`

export const RestaurantInfoCard = ({ restaurant = {}, theme }) => {

    const {
        name = "some restaurant name",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily = true
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={2} >
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title >{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map((item, index) => (
                            <SvgXml width={25} height={25} xml={star} key={index} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="label" style={{ color: "red", alignSelf: "center" }}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        {/* <View style={{ paddingLeft: 16 }} /> */}
                        <Spacer variant="left" size="medium" />
                        {isOpenNow && <IsOpen> <SvgXml width={25} height={25} xml={open} /> </IsOpen>}
                        <View style={{ paddingLeft: 16 }} />
                        <Image style={{ width: 15, height: 15, alignSelf: "center" }} source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
};