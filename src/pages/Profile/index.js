import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import tw from 'twrnc';
import NavigationHeader from '../../components/NavigationHeader';

export default function Profile() {
    return (
        <>
            <NavigationHeader title="Perfil"/>
            <View style={tw`items-center justify-between flex flex-col m-4`}>
                <Image
                    style={tw`h-40 w-40 rounded-full mt-20`}
                    source={require('../../../assets/avatar.jpg')}
                />

                <Text style={tw`ml-[14px] mr-[14px] mt-[25px] text-3xl text-gray-700 font-bold`}>Lucas Matheus</Text>
            </View>

            <View style={tw`flex items-center justify-around flex-col`}>
                <Text style={tw`text-xl font-bold text-gray-700`}>Informações pessoais</Text>
                <Text style={tw`text-base font-bold text-gray-700 mt-4`}>Nome Completo:</Text>
                <View style={tw`bg-gray-300 m-2 w-45 items-center mt-2 rounded-md shadow-md`}>
                    <Text style={tw`text-base text-gray-700 font-semibold`}>Lucas Matheus Filho</Text>
                </View>
                <Text style={tw`text-base font-bold text-gray-700 mt-2`}>Data de nascimento: </Text>
                <View style={tw`bg-gray-300 m-2 items-center rounded-md mt-2 shadow-md w-30`}>
                    <Text style={tw`text-base text-gray-700 font-semibold`}>17/04/1992</Text>
                </View>
            </View>
        </>
    )
}
