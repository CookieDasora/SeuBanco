import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

import { MotiView, AnimatePresence, MotiText } from 'moti';

export default function Movements({ data }) {

    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={tw`flex-1 mb-[24px]`} activeOpacity={0.7} onPress={ () => setShowValue(!showValue) }>
            <Text style={tw`text-gray-300 font-bold`}>{data.date}</Text>

           <View style={tw`flex-row justify-between mt-[2px] mb-[8px]`}>
                <Text style={tw`text-base font-bold text-gray-700`}>{data.label}</Text>

               { showValue ? (
                   <AnimatePresence exitBeforeEnter>
                        <MotiText
                            style = {data.type === 1 ? tw`text-green-600 font-bold text-base` : tw`text-red-600 font-bold text-base`}
                            from={{
                                translateX: 100
                            }}
                            animate={{
                                translateX: 0
                            }}
                            transition={{
                                type: 'spring',
                                duration: 500,
                            }}
                        >
                            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                        </MotiText>
                    </AnimatePresence>
               ) : (
                <AnimatePresence exitBeforeEnter>
                    <MotiView
                        style={tw`mt-[6px] w-[80px] h-[10px] bg-gray-200 rounded-md`}
                        from={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            type: 'timing'
                        }}
                    ></MotiView>
                </AnimatePresence>
               ) }
            </View>

        </TouchableOpacity>
    )
};
