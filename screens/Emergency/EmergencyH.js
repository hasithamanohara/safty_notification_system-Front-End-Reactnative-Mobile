import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import call from 'react-native-phone-call';

const EmergencyH = () => {

    const hanslecall = () => {
        const args = {
            number: '0765702452', // String value with the number to call
            prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        }

        call(args).catch(console.error)
    }

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View className=" flex-1 bg-slate-100 w-full h-full">
                <View>
                    {/* heading text */}
                    <View>
                        <View className="absolute top-7 items-center justify-center w-full">
                            <Text className="text-4xl font-semibold ">Emergency Help</Text>
                            <Text className="text-4xl font-semibold">Needed?</Text>
                        </View>
                        <View className="absolute top-28 items-center justify-center w-full">
                            <Text className="text-xl text-[#d42525] font-thin"> Just hold The button to notify via call</Text>
                            <Text className="text-xl text-[#d42525] font-thin"> Your guardian</Text>
                        </View>
                    </View>

                    {/* button */}

                    <Animatable.View animation={"fadeIn"} easing="ease-in-out">
                        <TouchableOpacity
                            onPress={hanslecall}>
                            <View className="items-center">
                                <View className="w-40 h-40 rounded-full bg-slate-300 items-center absolute justify-center top-44 shadow-lg ">
                                    <View className="w-36 h-36 rounded-full bg-red-600 items-center justify-center shadow-lg ">
                                        <View className="w-32 h-32 rounded-full bg-slate-300 items-center justify-center shadow-lg ">
                                            <View className="items-center justify-center">
                                                <Text className="text-4xl text-[#b00]">Hold</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Animatable.View>

                    {/* text below button */}
                    <View>
                        <View className="absolute top-80 items-center justify-center w-full">
                            <Text className="text-[28px] absolute top-11 font-normal">Not sure What to do?</Text>
                        </View>
                        <View className="absolute top-80 items-center justify-center w-full">
                            <Text className="text-[18px] top-20 font-extralight">pick the subject from below</Text>
                        </View>
                    </View>

                    {/* button for subject an emegency*/}
                    <View className="flex-col space-x-3 top-96 items-center justify-center">
                        <View className="h-24 w-40 bg-slate-200 rounded-lg absolute left-3 top-20 border-l-2 border-r-1 border-b-2 border-[#b00] justify-center">

                            <Text className="font-thin text-[24px] left-2">
                                I had an accident
                            </Text>

                        </View>

                        <View className="h-24 w-40 bg-slate-200 rounded-lg absolute top-20 left-44 border-l-2 border-r-1 border-b-2 border-[#b00] justify-center">
                            <TouchableOpacity
                            onPress={() => navigation.navigate("ForMoresu")}>
                                <Text className="font-thin text-[24px] left-2">
                                    For more Subject ...
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EmergencyH

