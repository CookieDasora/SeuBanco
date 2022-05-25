import React from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import tw from 'twrnc';

// Adaptative statusBarHeight. For Android and iOS.
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Header({ name, navigation }) {
    return (
        <View style={tw.style("bg-indigo-600", `pt-[${statusBarHeight}px]`, 'flex', 'flex-row', 'pl-[16px]', 'pr-[16px]', 'pb-[38px]')}>
            <View style={tw`flex-1 items-center flex-row justify-between`}>
                <Text style={tw`text-white text-lg font-light`}>
                    Olá,{' '}
                   <Text style={tw`text-white text-lg font-bold`}>{name}</Text>
                </Text>
                <TouchableOpacity activeOpacity={0.9} style={tw`w-[44px] h-[44px] bg-white/50 justify-center items-center rounded-full`} onPress={() => navigation.navigate('Profile')}>
                    <Feather name="user" size={27} color="#FFF"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
