import React, { useState, useEffect } from 'react';
import { Searchbar } from "react-native-paper";
import styled from 'styled-components/native';
import { View } from 'react-native';

const Search = styled(View)`


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

export const MapSearch = ({ data = "" }) => {

    return (
        <Search >
            <SearchBox placeholder="Search" />
        </Search>
    )
}
