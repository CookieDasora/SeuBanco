import React from 'react';
import tw from 'twrnc';
import {
    View,
    Text
} from 'react-native';
import NavigationHeader from '../../components/NavigationHeader';

const fake_purchases = [
    {
        id: 1,
        label: 'Conta de luz',
        value: '401,28',
        date: '14/02/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Pix de Ana',
        value: '791,84',
        date: '15/02/2022',
        type: 1
    },
    {
        id: 3,
        label: 'Renumeração / Salário',
        value: '25.134,80',
        date: '05/03/2022',
        type: 1
    },
    {
        id: 4,
        label: 'Internet',
        value: '120,00',
        date: '06/03/2022',
        type: 1
    },
    {
        id: 5,
        label: 'Fatura do cartão',
        value: '2.583,21',
        date: '05/02/2022',
        type: 1
    },
    {
        id: 6,
        label: 'Bônus',
        value: '589,72',
        date: '05/03/2022',
        type: 0
    }
]



export default function Purchases ({ navigator }) {
    return (
        <NavigationHeader title="Últimas Movimentações" />
    );
};
