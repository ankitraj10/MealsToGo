// import React, { useState, useEffect } from 'react';
// import { Searchbar } from "react-native-paper";
// import styled from 'styled-components/native';
// import { View } from 'react-native';

// const Search = styled(View)`
// padding:10px;
// position:absolute;
// z-index:999;
// top:50px;
// width:100%;
// `

// const SearchBox = styled(Searchbar).attrs({
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 4,
// })`
//     border-radius: 0px;
//     margin: 10px;
//     background-color: #fff;
// `;

// export const MapSearch = ({ data = "" }) => {

//     return (
//         <Search >
//             <SearchBox placeholder="Search" />
//         </Search>
//     )
// }
import React, { useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";

const RestaurantSearch = styled(View)``;
const Search = styled(View)`
  padding: ${(props) => props.theme.space[1]};
  position: absolute;
  z-index: 999;
  top: 50px;
  width: 100%;
`;

const SearchBox = styled(Searchbar).attrs({
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
})`
  border-radius: 0px;
  margin: 10px;
  background-color: #fff;
`;

export const MapSearch = ({ data }) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const { keyword, search } = data;
    useEffect(() => {
        setSearchKeyword(keyword);
    }, []);

    const loactionSearch = () => {
        search(searchKeyword);
    };

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <Search>
            <SearchBox
                placeholder="Search for location"
                icon="map"
                value={searchKeyword}
                onChangeText={setSearchKeyword}
                onIconPress={() => loactionSearch()}
                onSubmitEditing={() => loactionSearch()}
            />
        </Search>
    );
};
