import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/reastaurant-info-card.component";
import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
flex: 1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
const RestaurantSearch = styled(View)`
 padding:  ${(props) => props.theme.space[1]};
`

const RestaurantList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[1]};
  
`


export const ReastaurantsScreen = () => {
    return (
        <SafeArea  >
            <RestaurantSearch >
                <Searchbar placeholder="Search" />
            </RestaurantSearch>
            <RestaurantList >
                <RestaurantInfoCard />
            </RestaurantList>
        </SafeArea>
    )
};
