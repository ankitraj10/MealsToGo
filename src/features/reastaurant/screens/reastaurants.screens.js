import React, { useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, FlatList } from 'react-native';
import { Search } from "../components/search.component"
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/reastaurant-info-card.component";
import styled from 'styled-components/native';
import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restraunts/restraunts.context";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { LocationContext } from "../../../services/location/location.context";

const RestaurantList = styled(View)`
  padding: ${(props) => props.theme.space[1]};
`

const ActivityLoadingContainer = styled(View)`
    flex:1;
    justify-content:center;

`

const RestaurantFlatList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 10
    }
})`
margin-bottom: ${(props) => props.theme.space[5]};
`

export const ReastaurantsScreen = () => {
    const { restaurants, isLoading, error, retriveRestraunts } = useContext(RestaurantsContext);
    const LocationData = useContext(LocationContext)

    useEffect(() => {
        retriveRestraunts(LocationData.location);
    }, [LocationData.location])

    if (isLoading) {
        return <ActivityLoadingContainer><ActivityIndicator animating={true} color={MD2Colors.red800} size={'large'} /></ActivityLoadingContainer>
    }



    return (
        <SafeArea  >
            <Search data={LocationData} />
            <RestaurantList >
                <RestaurantFlatList
                    data={restaurants}
                    renderItem={(item) => {

                        return <><Spacer variant='bottom' size='large' /><RestaurantInfoCard restaurant={item} /></>
                    }}
                    keyExtractor={(item) => item.name}

                />

            </RestaurantList>
        </SafeArea>
    )
};
