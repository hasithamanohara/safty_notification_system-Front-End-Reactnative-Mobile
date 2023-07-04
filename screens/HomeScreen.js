import { View, Text, SafeAreaView, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import * as Animatable from 'react-native-animatable';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Biking, Jogging, Running } from '../assets';
import { Button } from '@react-native-material/core';

const HomeScreen = () => {

    {/*Header showing */ }
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-white-100 flex-1 relative">
            {/*first section*/}

            <View className="flex-row px-5 mt-5 items-ceter space-x-2">
                <View className="w-12 h-12 bg-black rounded-full items-center justify-center">
                    <Text className="text-[#57b8de] text-2xl font-semibold" >Go</Text>
                </View>
                <Text className="text-black text-2xl font-semibold mt-2"> With  Nimbus</Text>
            </View>

            {/*second section*/}
            <View className="px-5  space-y-2 mt-">
                <Text className="texxt-[#454545] text-[32px]">Enjoy the trip with</Text>
                <Text className="text-[#57b8de] text-[36px] absolute -bottom-8 left-4 ">Good Moments</Text>
            </View>

            {/* <View className="w-24 h-36 bg-gray-300 rounded-md items-center justify-center shadow-lg absolute right-7 top-6">
                    <Image
                        source={Crologo}
                        className="w-full h-full rounded-md object-cover"
                    />
             </View> */}


            {/*background Rounds*/}
            <View className="w-[300px] h-[300px] bg-[#2014d1] rounded-full absolute bottom-36 -right-20"></View>
            <View className="w-[250px] h-[250px] bg-[#e35711] rounded-full absolute -bottom-16 -left-14"></View>
            <View className="w-[90px] h-[90px] bg-[#a20faa] rounded-full absolute top-64 left-2"></View>
            <View className="w-[190px] h-[190px] bg-[#0aa32b] rounded-full absolute -bottom-16 -right-16"></View>
            {/* <View className="w-[330px] h-[330px] bg-[#eddfe3] rounded-full absolute -top-32 -right-4"></View> */}

            {/*fourth section buttons For choice activity*/}
            <View className="flex-1 items-center justify-center absolute bottom-10 left-0 w-full h-full">

                {/*Running section*/}
                <View className="flex-row items-center justify-between px-2 absolute bottom-80 left-4 w-11/12 h-24 bg-slate-300 rounded-xl border-l-4 border-r-1 border-b-4 border-[#2f6f88] ">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Running")}>
                        <Animatable.View animation={"fadeIn"} easing="ease-in-out">
                            {/* animatable effet for buttons */}
                            <Text className="text-[18px] text-[#0B646B] font-thin">start a quick run</Text>
                            <Text className="text-[40px] text-[#183c4d]">Running</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Running")}>
                        <Animatable.View animation={"fadeIn"} easing="ease-in-out" className="w-16 h-16 bg-gray-300 rounded-md items-center justify-center shadow-lg">
                            <Image
                                source={Running}
                                className="w-full h-full rounded-md object-cover"
                            />
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
                {/* end of runnig */}

                {/* start of walking section*/}
                <View className="flex-row items-center justify-between px-2 absolute bottom-52 left-4 w-11/12 h-24 bg-slate-300 rounded-xl border-l-4 border-r-1 border-b-4 border-[#2f6f88] ">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Walking")}>
                        <View>
                            <Text className="text-[18px] text-[#0B646B] font-thin">start a quick Walk</Text>
                            <Text className="text-[40px] text-#183c4d]">Walking</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Walking")}>
                        <View className="w-16 h-16 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                            <Image
                                source={Jogging}
                                className="w-full h-full rounded-md object-cover"
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* end of walking */}

                {/*Biking section*/}
                <View className="flex-row items-center justify-between px-2 absolute bottom-24 left-4 w-11/12 h-24 bg-slate-300 rounded-xl border-l-4 border-r-1 border-b-4 border-[#2f6f88] ">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Biking")}>
                        <View>
                            <Text className="text-[18px] text-[#0B646B] font-thin">start a quick Ride</Text>
                            <Text className="text-[40px] text-[#183c4d]">Biking</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="w-16 h-16 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                            <Image
                                source={Biking}
                                className="w-full h-full rounded-md object-cover"
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                {/*Hiking section*/}
                <View className="flex-row items-center justify-between px-2 absolute -bottom-4 left-4 w-11/12 h-24 bg-white rounded-xl border-l-4 border-r-1 border-b-4 border-[#2f6f88] ">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("EmgManageHome")}>
                        <View>
                            <Text className="text-[18px] text-[#13197f] font-thin">Connect with one tap</Text>
                            <Text className="text-[40px] text-[#e83434]">Emergency</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("EmergencyH")}>

                        <View className="w-16 h-16 bg-gray-400 rounded-md items-center justify-center shadow-lg">
                            <Image
                                source={require('../assets/EmegencyHome.png')}
                                style={{ width: 60, height: 60 }}
                            />

                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/*End of button section*/}

        </SafeAreaView>
    )
}

export default HomeScreen