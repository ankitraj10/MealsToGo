import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";
import { MapSearch } from "../component/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restraunts/restraunts.context";
import { Text, View, TouchableOpacity } from "react-native";
import { MapCallout } from "../component/map-callout.component"
import { Callout } from "react-native-maps";
// import { Marker,Callout } from 'react-native-maps';

const MapContainer = styled(SafeArea)`
  flex: 1;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;



export const MapScreen = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);
    const LocationData = useContext(LocationContext);

    const [latDelta, setLatDelta] = useState(0);

    const { lat, lng, viewport } = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);
    return (
        <>
            <MapSearch data={LocationData} />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map((restaurant) => {
                    return (
                        <Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude: restaurant.geometry.location.lng,
                            }}
                            pinColor="red"

                        >
                            <Callout onPress={() => navigation.navigate("RestaurantDetails", { restaurantsDetail: { item: restaurant } })}>
                                <MapCallout restaurant={restaurant} navigation={navigation}
                                />
                            </Callout>
                        </Marker>
                    );
                })}
            </Map>
        </>
    );
};
