import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const EmgManageHome = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View className="w-80 h-36 bg-slate-50 left-5 top-5 ">
                <ImageBackground
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxxlz5PYaPNOQa47XEQjZwNJaBCJsVlHiNg&usqp=CAU' }}
                    className="object-cover w-full h-full opacity-85 "
                >
                    <View style="flex: 1, justifyContent: 'center', alignItems: 'center'">
                        <Text className="absolute left-4 text-[32px] font-light top-1 text-[#2228a1]">Connecting Care,</Text>
                        <Text className="absolute left-4 text-[24px] top-9 font-light text-[#070a45]">One Tap Away ...</Text>

                        <View className="absolute left-64 top-3">
                            <Ionicons name="md-heart" size={32} color="red" />
                        </View>
                    </View>
                </ImageBackground>
            </View>

            {/* police */}
            <View className="absolute top-2">
                <View className="w-36 h-36 rounded-lg bg-sky-500 absolute top-44 left-5 items-center justify-center">
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1417/1417898.png' }}
                        className="w-16 h-16"
                    />
                    <Text className="text-[#ffffff] text-[24px] font-light">Police</Text>
                </View>
            </View>

            {/* Health */}
            <View className="absolute top-2">
                <View className="w-36 h-36 rounded-lg bg-cyan-300 absolute top-44 left-48 items-center justify-center">
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2382/2382461.png' }}
                        className="w-16 h-16 absolute top-8"
                    />
                    <Text className="absolute top-24 text-[#ffffff] text-[24px] font-light">Health</Text>
                </View>
            </View>

            {/* Ambulance */}
            <View className="absolute top-12">
                <View className="absolute top-10">
                    <View className="w-36 h-36 rounded-lg bg-orange-400 absolute top-64 left-48 items-center justify-center">
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2894/2894975.png' }}
                            className="w-16 h-16 absolute top-8"
                        />
                        <Text className="absolute top-24 text-[#ffffff] text-[24px] font-light">Ambulance</Text>
                    </View>
                </View>
            </View>

            {/* Naibourhood */}
            <View className="absolute top-12">
                <View className="absolute top-10">
                    <View className="w-36 h-36 rounded-lg bg-purple-600 absolute top-64 left-5 items-center justify-center">
                        <TouchableOpacity onPress={() => navigation.navigate("ShowFamEmg")}>
                            <Image
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/2965/2965169.png' }}
                                className="w-16 h-16"
                            />
                            <Text className="text-[#ffffff] text-[24px] font-light">Family</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Manage connection */}
            <View className="top-10">
                <View className="absolute top-0">
                    <View className="w-80 h-20 rounded-lg bg-red-500 absolute top-80 left-5 justify-center">
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1634/1634158.png' }}
                            className="w-14 h-8 absolute left-60 top-6"
                        />
                        <TouchableOpacity onPress={() => navigation.navigate("ManageFam")}>
                            <Text className=" text-[#ffffff] text-[24px] font-light left-5">Manage Your</Text>
                            <Text className=" text-[#ffffff] text-[24px] font-light left-5">connections here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default EmgManageHome