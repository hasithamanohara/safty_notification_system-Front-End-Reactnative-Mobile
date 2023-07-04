import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Image } from 'react-native';
import { Hiking, temp, nvbWf } from '../assets';

export class Headingbar extends Component {
    render() {
        return (
            <SafeAreaView>
                <View className="flex-row items-center justify-center absolute top-7 left-0 w-full h-12 bg-slate-50 border-l-2 border-r-2 border-b-2 border-t-2 rounded-xl border-[#b1dced]">
                    {/* Distance */}
                    <View className="right-20 items-center justify-center">
                        <Text className="text-slate-900">Distance</Text>
                        <Text>--m</Text>
                    </View>

                    {/* Speed */}
                    <View className="right-0 items-center justify-center">
                        <Text className="text-slate-900">Speed</Text>
                        <Text>--km/h</Text>
                    </View>

                    {/* CAlories */}
                    <View>
                        <View className="-right-20 items-center justify-center">
                            <Text className="text-slate-900">Calories</Text>
                            <Text>-- kcal</Text>
                        </View>
                    </View>

                    {/* temp */}
                    <View className="flex-row space-x-2 w-20 h-9 absolute left-3 top-14 bg-slate-200 border-cyan-400 rounded-3xl items-center ">
                        {/* tempicon */}
                        <View className=" w-7 h-7 rounded-full bg-white left-1">
                            <Image
                                source={Hiking}
                                className="w-7 h-7 rounded-full"
                            />
                        </View>
                        {/* TempValuve */}
                        <View>
                            <Text className="to-black text-[16px] font-bold">
                                32 °C
                            </Text>
                        </View>
                    </View>

                    <View className="flex-row space-x-2 w-20 h-9 absolute right-3 top-14 bg-slate-200 border-cyan-400 rounded-3xl items-center ">
                        {/* tempicon */}
                        <View className=" w-7 h-7 rounded-full bg-white left-1">
                            <Image
                                source={Hiking}
                                className="w-7 h-7 rounded-full"
                            />
                        </View>
                        {/* TempValuve */}
                        <View>
                            <Text className="to-black text-[16px] font-bold">
                                NVB
                            </Text>
                        </View>
                    </View>


                    <View className="flex-col w-14 h-14 absolute top-80 left-4 bg-transparent border-cyan-400 rounded-full items-center ">
                        {/* tempicon */}
                        <View className=" top-8 w-14 h-14 rounded-full bg-white">
                            {/* <Image
                                source={Hiking}
                                className="w-14 h-14 rounded-full"
                            /> */}
                        </View>
                        {/* TempValuve */}
                        <View>
                            <Text className="to-black text-[9px] font-normal top-8">
                                Your Location
                            </Text>
                        </View>
                    </View>

                    <View className="flex-col w-14 h-14 absolute top-80 right-4 bg-transparent border-cyan-400 rounded-full items-center ">
                        {/* tempicon */}
                        <View className=" top-8 w-14 h-14 rounded-full bg-white">
                            {/* <Image
                                source={Hiking}
                                className="w-14 h-14 rounded-full"
                            /> */}
                        </View>

                        <View className="bottom-24 w-14 h-14 rounded-full bg-white">
                            {/* <Image
                                source={Hiking}
                                className="w-14 h-14 rounded-full"
                            /> */}
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        )
    }
}

export default Headingbar
