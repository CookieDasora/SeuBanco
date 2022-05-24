import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function Movements({ data }) {
    return (
        <TouchableOpacity style={tw`flex-1 mb-[24px]`}>
            <Text style={tw`text-gray-300 font-bold`}>{data.date}</Text>

           <View style={tw`flex-row justify-between mt-[2px] mb-[8px]`}>
                <Text style={tw`text-base font-bold text-gray-700`}>{data.label}</Text>

                <Text
                style = {data.type === 1 ? tw`text-green-600 font-bold text-base` : tw`text-red-600 font-bold text-base`}
                >
                    {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                </Text>
            </View>

        </TouchableOpacity>
    )
};
