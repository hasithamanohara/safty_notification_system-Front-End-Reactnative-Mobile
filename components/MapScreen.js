import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import MapView from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import {Marker} from 'react-native-maps';

const MapScreen = () => {
    const route = useRoute();
    const mapView = useRef(null);
    console.log(route.params);
    return (
        <View>
            <MapView initialRegion={{
                latitude: 6.9271,
                longitude: 79.8612,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            }}
                ref={mapView} style={{ width: "100%", height: "100%" }}
            >

            </MapView>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
