import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, FlatList } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/reastaurant-info-card.component";
import styled from 'styled-components/native';
import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restraunts/restraunts.context";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const RestaurantSearch = styled(View)`
 padding:  ${(props) => props.theme.space[1]};
`

const RestaurantList = styled(View)`
  padding: ${(props) => props.theme.space[1]};
`

const ActivityLoadingContainer = styled(View)`
    flex:1;
    justify-content:center;

`

const SearchBox = styled(Searchbar).attrs({
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
})`
    border-radius: 0px;
    margin: 10px;
    background-color: #fff;
`;

const RestaurantFlatList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 10
    }
})`
margin-bottom: ${(props) => props.theme.space[5]};
`

export const ReastaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    if (isLoading) {
        return <ActivityLoadingContainer><ActivityIndicator animating={true} color={MD2Colors.red800} size={'large'} /></ActivityLoadingContainer>
    }

    return (
        <SafeArea  >
            <RestaurantSearch >
                <SearchBox placeholder="Search" />
            </RestaurantSearch>
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
