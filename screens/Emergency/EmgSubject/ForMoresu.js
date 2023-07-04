import { View, Text, SafeAreaView, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Linking } from 'react-native';
import SendSMS from 'react-native-sms';


const ForMoresu = () => {

    const sendSMS = () => {
        SendSMS.send(
            {
                body: 'An accident!',
                recipients: ['1234567890'], // Array of recipient numbers
                successTypes: ['sent', 'queued'],
            },
            (completed, cancelled, error) => {
                console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + ' error: ' + error);
            }
        );
    };


    const navigation = useNavigation()

    return (

        <SafeAreaView className="flex-1 bg-slate-200">
            <View className=" flex-col space-y-0 absolute items-start justify-center top-4 left-3">
                <Text className="font-semibold text-[32px]">Please, choose the</Text>
                <Text className="font-semibold text-[32px] -top-2">Emergency ...</Text>
            </View>

            <View>
                <View className="w-80 h-16 bg-slate-100 absolute top-28 rounded-xl left-5 justify-center flex-col space-x-3">
                    <View className="w-12 h-12 rounded-lg bg-red-50 left-2 items-center justify-center">
                        <Image
                            source={{ uri: 'https://img.icons8.com/?size=512&id=PinmAhxLF-ET&format=png' }}
                            className="w-10 h-10  object-cover"
                        />
                    </View>
                    <View className="w-60 h-12 bg-white absolute left-14 rounded-lg items-start justify-center">
                        <TouchableOpacity
                            onPress={sendSMS}>
                            <Text className="absolute left-3 font-thin text-[24px]">
                                An accident
                            </Text>
                        </TouchableOpacity>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4716/4716235.png' }}
                            className="w-8 h-10 object-cover-full absolute left-48"
                        />
                    </View>
                </View>
            </View>

            <View>
                <View className="w-80 h-16 bg-slate-100 absolute top-48 rounded-xl left-5 justify-center flex-col space-x-3">
                    <View className="w-12 h-12 rounded-lg bg-red-50 left-2 items-center justify-center">
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3782/3782070.png' }}
                            className="w-10 h-10  object-cover"
                        />
                    </View>
                    <View className="w-60 h-12 bg-white absolute left-14 rounded-lg items-start justify-center">
                        <Text className="absolute left-3 font-thin text-[24px]">
                            Cheast pain
                        </Text>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4716/4716235.png' }}
                            className="w-8 h-10 object-cover-full absolute left-48"
                        />
                    </View>
                </View>
            </View>

            <View className="absolute top-4">
                <View className="w-80 h-16 bg-slate-100 absolute top-64 rounded-xl left-5 justify-center flex-col space-x-3">
                    <View className="w-12 h-12 rounded-lg bg-red-50 left-2 items-center justify-center">
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4462/4462171.png' }}
                            className="w-10 h-10  object-cover"
                        />
                    </View>
                    <View className="w-60 h-12 bg-white absolute left-14 rounded-lg items-start justify-center">
                        <Text className="absolute left-3 font-thin text-[24px]">
                            Breathiness
                        </Text>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4716/4716235.png' }}
                            className="w-8 h-10 object-cover-full absolute left-48"
                        />
                    </View>
                </View>
            </View>

            <View className="absolute top-8">
                <View className="w-80 h-16 bg-slate-100 absolute top-80 rounded-xl left-5 justify-center flex-col space-x-3">
                    <View className="w-12 h-12 rounded-lg bg-red-50 left-2 items-center justify-center">
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/10677/10677166.png' }}
                            className="w-10 h-10  object-cover"
                        />
                    </View>
                    <View className="w-60 h-12 bg-white absolute left-14 rounded-lg items-center justify-center">
                        <Text className="absolute left-3 font-thin text-[24px]">
                            Unconsciousness
                        </Text>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4716/4716235.png' }}
                            className="w-8 h-10 object-cover-full absolute left-48"
                        />
                    </View>
                </View>
            </View>

            <View className="absolute top-12">
                <View className="w-80 h-16 bg-slate-100 absolute top-96 rounded-xl left-5 justify-center flex-col space-x-3">
                    <View className="w-12 h-12 rounded-lg bg-red-50 left-2 items-center justify-center">
                        <Image
                            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/noncommunicable-diseases-ncds-1/62/weakness-acute-muscle-paralysis-health-512.png' }}
                            className="w-10 h-10  object-cover"
                        />
                    </View>
                    <View className="w-60 h-12 bg-white absolute left-14 rounded-lg items-start justify-center">
                        <Text className="absolute left-3 font-thin text-[20px]">
                            Sudden paralysis or weakness
                        </Text>
                        <Image
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4716/4716235.png' }}
                            className="w-8 h-10 object-cover-full absolute left-48"
                        />
                    </View>
                </View>
            </View>

            <View className="flex-col space-x-3 top-96 items-center justify-center">
                <View className="h-16 w-40 bg-white rounded-lg absolute left-3 top-32 border-l-2 border-r-1 border-b-2 border-[#b00] justify-center">

                    <Text className="font-medium text-[24px] left-2 text-[#f31313]">
                        Manage Subject
                    </Text>

                </View>

                <View className="h-16 w-40 bg-white rounded-lg absolute top-32 left-44 border-l-2 border-r-1 border-b-2 border-[#b00] justify-center">

                    <Text className="font-medium text-[24px] left-2 text-[#f72727]">
                        See Respon...
                    </Text>

                </View>
            </View>

        </SafeAreaView >
    )
}

export default ForMoresu