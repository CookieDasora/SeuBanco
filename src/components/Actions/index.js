import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import tw from 'twrnc';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function Actions() {
    return (
        <ScrollView style={tw`max-h-[84px] mb-[14px] mt-[18px] pr-10 pl-4`} horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={tw`items-center mr-[32px]`}>
                <View style={tw`bg-gray-300 justify-center items-center h-[60px] w-[60px] rounded-full`}>
                    <AntDesign name="addfolder" size={26} color="#000" />
                </View>
                <Text style={tw`mt-[4px] text-center font-semibold`}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`items-center mr-[20px]`}>
                <View style={tw`bg-gray-300 justify-center items-center h-[60px] w-[60px] rounded-full`}>
                    <FontAwesome5 name="money-bill-wave" size={26} color="#000" />
                </View>
                <Text style={tw`mt-[4px] text-center font-semibold`}>Pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`items-center mr-[20px]`}>
                <View style={tw`bg-gray-300 justify-center items-center h-[60px] w-[60px] rounded-full`}>
                    <AntDesign name="creditcard" size={26} color="#000" />
                </View>
                <Text style={tw`mt-[4px] text-center font-semibold`}>Cartão de Crédito</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`items-center mr-[32px]`}>
                <View style={tw`bg-gray-300 justify-center items-center h-[60px] w-[60px] rounded-full`}>
                    <AntDesign name="apple1" size={26} color="#000" />
                </View>
                <Text style={tw`mt-[4px] text-sm text-center font-semibold`}>Apple Pay</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
