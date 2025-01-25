import React, { useState, useEffect } from 'react';
import { Searchbar } from "react-native-paper";
import styled from 'styled-components/native';
import { View } from 'react-native';

const RestaurantSearch = styled(View)`
 padding:  ${(props) => props.theme.space[1]};
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

export const Search = ({ data }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const { keyword, search } = data;
    useEffect(() => {
        setSearchKeyword(keyword)
    }, [])

    const loactionSearch = () => {
        console.log("location searech", searchKeyword);
        search(searchKeyword)
    }




    return (
        <RestaurantSearch >
            <SearchBox placeholder="Search" value={searchKeyword} onChangeText={setSearchKeyword} onIconPress={() => loactionSearch()} onSubmitEditing={() => loactionSearch()} />
        </RestaurantSearch>
    )
}
