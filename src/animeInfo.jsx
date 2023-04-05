import { View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import React from 'react'

const AnimeInfo = (props) => {
    const animedeatils = props.route.params;
    console.log(JSON.stringify(animedeatils));
    return (
        <ScrollView className="mt-2 mx-2 w-[96vw] h-[99vh]" showsVerticalScrollIndicator={false}>
            <View className="flex-row justify-center items-center mt-2 ">
                <Image source={{ uri: animedeatils?.images?.jpg?.large_image_url }} className="w-80 h-96 rounded-xl " />
            </View>
            <View className="h-full mb-10">
                <Text className="text-center mt-3 mx-5 text-xl font-bold text-teal-400 " numberOfLines={1}>{animedeatils.title}</Text>
                <View className="mx-4 mt-1">
                    <Text className="text-justify text-lg font-semibold capitalize  ">description : </Text>
                    <Text className="text-justify text-sm font-normal pl-1 pt-1 " numberOfLines={7}>{animedeatils.synopsis}</Text>
                </View>
                <View className="mx-4 mt-2.5">
                    <Text className="text-justify text-lg font-semibold capitalize ">information : </Text>
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
    )
}

export default AnimeInfo

{/* <View className="h-28 w-full bg-teal-500 mt-5 mx-1 rounded-lg flex-row justify-center items-center ">
<View className="w-28 h-24 bg-gray-400 mx-2">
</View>
<View className="w-28 h-24 bg-gray-400 mx-2">
</View>
<View className="w-28 h-24 bg-gray-400 mx-2">
</View>
</View> */}