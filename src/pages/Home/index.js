import { Text, View, FlatList } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';
import tw from 'twrnc';

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

export default function Home({ navigation }) {
    return (
        <View style={tw`bg-gray-100/50`}>
            <Header name="Lucas" navigation={navigation}/>
            <Balance balance="37.982,32" expenses="-7.152,48"/>
            <Actions />
            <Text style={tw`text-lg font-bold m-[14px]`}>Últimas movimentações</Text>
            <FlatList
                style={tw`mr-[14px] ml-[14px]`}
                data={fake_purchases}
                keyExtractor={ (item) => String(item.id) }
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item }) => <Movements data={item}/> }
            />
        </View>
    );
}

