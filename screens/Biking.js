import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Stopwatch from '../components/Stopwatch'
import Headingbar from '../components/Headerbar'
import MapScreen from '../components/MapScreen'
const Biking = () => {
    return (
        <SafeAreaView>
            <View >
                {/* time countdown */}
                <View className="z-10">
                    <Stopwatch />
                </View>

                {/* heading bar  */}
                <View className="z-10">
                    <Headingbar />
                </View>
                <View>
                    <MapScreen />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Biking;