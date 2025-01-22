import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, FlatList } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/reastaurant-info-card.component";
import styled from 'styled-components/native';
import { Spacer } from "../../../components/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component"

const RestaurantSearch = styled(View)`
 padding:  ${(props) => props.theme.space[1]};
`

const RestaurantList = styled(View)`
 
  padding: ${(props) => props.theme.space[1]};

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
    return (
        <SafeArea  >
            <RestaurantSearch >
                <SearchBox placeholder="Search" />
            </RestaurantSearch>
            <RestaurantList >
                <RestaurantFlatList
                    data={[
                        { name: 1 },
                        { name: 2 },
                        { name: 3 },
                        { name: 4 },
                        { name: 5 },
                        { name: 6 },
                        { name: 7 },
                        { name: 8 }
                    ]}
                    renderItem={() => <><Spacer variant='bottom' size='large' /><RestaurantInfoCard /></>}
                    keyExtractor={(item) => item.name}

                />

            </RestaurantList>
        </SafeArea>
    )
};
