import React from "react";
import styled from "styled-components/native";
import { View, Text, Image, StyleSheet } from "react-native";
import { Callout } from "react-native-maps";
import { CompactRestaurantInfo } from "../../reastaurant/components/compact-restaurant-info.component";

const MapCallBackText = styled(Text)`
  font-weight: 500;
  text-align: center;
`;

const MapCallbackContainer = styled(View)`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  alignitems: center;
  width: 150px;
  padding-bottom: 25px;
`;

const MapCallBackImage = styled(Image)`
  width: 120px;
  height: 80px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const MapCallout = ({ restaurant, navigation }) => {
  console.log("photos", restaurant);
  return (
    // <Callout tooltip >
    <MapCallbackContainer>
      <CompactRestaurantInfo restaurant={restaurant} navigation={navigation} />
    </MapCallbackContainer>
    // </Callout>
  );
};
