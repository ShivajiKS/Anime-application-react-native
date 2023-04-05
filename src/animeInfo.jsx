import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const AnimeInfo = (props) => {
    const animedeatils = props.route.params;
    return (
        <>
            <BackHeader />
            <ScrollView className="mt-2 mx-2 w-[96vw] h-[99vh]" showsVerticalScrollIndicator={false}>
                <View className="flex-row justify-center items-center mt-2 ">
                    <Image source={{ uri: animedeatils?.images?.jpg?.large_image_url }} className="w-80 h-96 rounded-xl " />
                </View>
                <View className="h-full mb-10">
                    <Text className="text-center mt-3 mx-5 text-2xl font-bold text-teal-400 " numberOfLines={1}>{animedeatils.title}</Text>
                    <View className="mx-4 mt-1">
                        <Text className="text-justify text-lg font-semibold capitalize  ">description : </Text>
                        <Text className="text-justify text-sm font-normal pl-1 pt-1 " numberOfLines={7}>{animedeatils.synopsis}</Text>
                    </View>
                    <View className="mx-4 mt-2.5">
                        <Text className="text-justif text-lg font-semibold capitalize text-teal-400">information : </Text>
                        <View className="ml-1">
                            <View className="flex-row ">
                                <Text className="text-base font-bold pl-1 pt-1 capitalize ">type : </Text>
                                <Text className=" text-base font-normal pl-1 pt-1 capitalize ">{animedeatils.type} </Text>
                            </View>
                            <View className="flex-row ">
                                <Text className="text-base font-bold pl-1 pt-1 capitalize ">Episodes : </Text>
                                <Text className=" text-base font-normal pl-1 pt-1 capitalize ">{animedeatils.episodes}</Text>
                            </View>
                            <View className="flex-row ">
                                <Text className="text-base font-bold pl-1 pt-1 capitalize ">Status : </Text>
                                <Text className=" text-base font-normal pl-1 pt-1 capitalize ">{animedeatils.status}</Text>
                            </View>
                            <View className="flex-row ">
                                <Text className="text-base font-bold pl-1 pt-1 capitalize ">Duration : </Text>
                                <Text className=" text-base font-normal pl-1 pt-1 capitalize ">{animedeatils.duration}</Text>
                            </View>
                            <View className="flex-row ">
                                <Text className="text-base font-bold pl-1 pt-1 capitalize ">Rating :</Text>
                                <Text className=" text-base font-normal pl-1 pt-1 capitalize ">{animedeatils.score} \10</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </>
    )
}

export default AnimeInfo


const BackHeader = () => {
    const navigation = useNavigation();
    return (
        <View className="flex-row top-12 left-2 h-[85px] ">
            <TouchableOpacity className="" onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" color={"black"} size={35} />
            </TouchableOpacity>
        </View>
    )
}

