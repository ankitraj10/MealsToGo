import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { Search } from "../components/search.component"
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/reastaurant-info-card.component";
import styled from 'styled-components/native';
import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restraunts/restraunts.context";
import { FavouriteContext } from "../../../services/favourites/favourite.context";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { LocationContext } from "../../../services/location/location.context";
import { FavouriteBar } from "../../../components/favourite/favourite-bar.component";

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

export const ReastaurantsScreen = ({ navigation }) => {
    const [isToggle, setIsToggle] = useState(false)
    const { restaurants, isLoading, error, loadRestaurants } = useContext(RestaurantsContext);
    const LocationData = useContext(LocationContext);
    const { favourites } = useContext(FavouriteContext);

    useEffect(() => {
        loadRestaurants(LocationData.location);
    }, [LocationData.location])

    if (isLoading) {
        return <ActivityLoadingContainer><ActivityIndicator animating={true} color={MD2Colors.red800} size={'large'} /></ActivityLoadingContainer>
    }



    return (
        <SafeArea  >
            <Search
                data={LocationData}
                favouriteToggle={isToggle}
                favouriteIsToggle={() => setIsToggle(!isToggle)}
            />
            {isToggle && <FavouriteBar favourites={favourites} />}
            <RestaurantList >
                <RestaurantFlatList
                    data={restaurants}
                    renderItem={(item, index) => {
                        return <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails", { restaurantsDetail: item, data: restaurants[index] })}><Spacer variant='bottom' size='large' /><RestaurantInfoCard restaurant={item} /></TouchableOpacity>
                    }}
                    keyExtractor={(item) => item.name}

                />

            </RestaurantList>
        </SafeArea>
    )
};
