import React from 'react';
import tw from 'twrnc';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function NavigationHeader({ title }) {

    const navigator = useNavigation();
    const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

    return (
        <View style={tw.style("bg-indigo-600", "w-full", `pt-[${statusBarHeight}px]`, "flex", "flex-row", "pl-[16px]", 'pr-[16px]', 'pb-[20px]', 'shadow-md')}>
            <View style={tw`flex-row flex-1`}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => navigator.goBack()}>
                    <AntDesign name="back" size={27} color="#FFF" />
                </TouchableOpacity>
                <View style={tw`justify-center items-center flex-col flex-1 mr-[20px]`}>
                    <Text style={tw`font-bold text-lg text-gray-800 text-white`}>{title}</Text>
                </View>
            </View>
        </View>
    );
}
