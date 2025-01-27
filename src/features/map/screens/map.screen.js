import React from 'react';
import MapView from 'react-native-maps';
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";

const MapContainer = styled(SafeArea)`
    flex: 1;
`

const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`

export const MapScreen = () => {
    return (
        <MapContainer >
            <Map />
        </MapContainer>
    );
}