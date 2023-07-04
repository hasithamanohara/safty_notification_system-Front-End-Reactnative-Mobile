import { View, Text, SafeAreaView, Imag, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ManageFam = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-slate-300 flex-1" >
            <View className="flex-row top-2">
                <View className="w-36 h-10 bg-purple-500 rounded-2xl top-3 items-center justify-center left-4 right-2 border-l-2 border-r-2 border-b-2 border-t-2 border-[#000000]">
                    <Text className=" text-[28px] text-[#ffff] font-normal">Neaibour</Text>
                </View>

                <View className="w-28 h-10 bg-slate-100 -z-10 rounded-2xl top-3 items-center justify-center right-2 border-l-0 border-r-2 border-b-2 border-t-2 border-[#000000]">
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate("Ambulance")}>
                        <Text className=" text-[20px] text-[#0e0d0d] font-thin left-2">Ambula</Text>
                    </TouchableOpacity> */}
                </View>


                <View className="w-28 h-10 bg-slate-100 -z-20 rounded-2xl top-3 items-center justify-center right-7 border-l-0 border-r-2 border-b-2 border-t-2 border-[#000000]">
                    <Text className=" text-[20px] text-[#0e0d0d] font-thin left-2">Police</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ManageFam