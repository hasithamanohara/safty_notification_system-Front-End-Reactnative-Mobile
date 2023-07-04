import { View, Text } from 'react-native'
import React from 'react'
import Stopwatch from '../components/Stopwatch'
import Headingbar from '../components/Headerbar'
import MapScreen from '../components/MapScreen'

const Walking = () => {
    return (
        <View >
            <View className="z-10">
                <Stopwatch />
            </View>
            <View className="z-10">
                <Headingbar />
            </View>
            <View>
                <MapScreen />
            </View>
        </View>
    )
}

export default Walking