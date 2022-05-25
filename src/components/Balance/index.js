import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { MotiView, MotiText } from 'moti';

export default function Balance ({ balance, expenses }) {

    const [ showValue, setShowValue ] = useState(false);

    return (
        <MotiView
            style={tw`bg-white flex-row justify-between pr-[18px] pl-[18px] mt-[-20px] ml-[14px] mr-[14px] rounded-xl pt-[22px] pb-[22px] z-100 shadow-lg`}
            from={{
                translateY: 300,
                opacity: 0
            }}
            animate={{
                translateY: 0,
                opacity: 1
            }}
            transition={{
                type: 'timing',
                delay: 800,
                duration: 800
            }}
        >

            <View>
                <Text style={tw`text-xl text-gray-300`}>Saldo</Text>
                <TouchableOpacity activeOpacity={1} onPress={() => setShowValue(!showValue)} style={tw`flex-row items-center`}>
                    <Text style={tw`text-gray-300 mr-[6px]`}>R$</Text>
                    { showValue ? (
                        <MotiText
                            style={tw`text-green-600 text-xl font-bold`}
                            from={{
                                opacity: 0,
                                translateY: 300,
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0
                            }}
                            transition={{
                                type: 'timing',
                                duration: 600
                            }}
                        >
                            {balance}
                        </MotiText>
                    ) : (
                        <Text style={tw`text-gray-800 text-xl font-extrabold `}>*********</Text>
                    ) }
                </TouchableOpacity>
            </View>

            <View>
                <Text style={tw`text-xl text-gray-300`}>Gastos</Text>
                <TouchableOpacity onPress={() => setShowValue(!showValue)} style={tw`flex-row items-center`}>
                    <Text style={tw`text-gray-300 mr-[6px]`}>R$</Text>
                    { showValue ? (
                        <MotiText
                            style={tw`text-red-600 text-xl font-bold`}
                            from={{
                                opacity: 0,
                                translateY: 300
                            }}
                            animate={{
                                opacity: 1,
                                translateY: 0
                            }}
                            transition={{
                                type: 'timing',
                                duration: 600,
                            }}
                        >
                            {expenses}
                        </MotiText>
                    ) : (
                        <Text style={tw`text-gray-800 text-xl font-extrabold`}>*********</Text>
                    ) }
                </TouchableOpacity>
            </View>


        </MotiView>
    );
}
