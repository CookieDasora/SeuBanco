import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function Balance ({ balance, expenses }) {
    return (
        <View style={tw`bg-white flex-row justify-between pr-[18px] pl-[18px] mt-[-20px] ml-[14px] mr-[14px] rounded-xl pt-[22px] pb-[22px] z-100 shadow-lg`}>

            <View>
                <Text style={tw`text-xl text-gray-300`}>Saldo</Text>
                <View style={tw`flex-row items-center`}>
                    <Text style={tw`text-gray-300 mr-[6px]`}>R$</Text>
                    <Text style={tw`text-green-600 text-xl font-bold`}>{balance}</Text>
                </View>
            </View>

            <View>
                <Text style={tw`text-xl text-gray-300`}>Gastos</Text>
                <View style={tw`flex-row items-center`}>
                    <Text style={tw`text-gray-300 mr-[6px]`}>R$</Text>
                    <Text style={tw`text-red-600 text-xl font-bold`}>{expenses}</Text>
                </View>
            </View>


        </View>
    );
}
