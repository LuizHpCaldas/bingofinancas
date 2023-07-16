import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';


const list = [{
    id: 1,
    label: 'Boleto Internet',
    value: '119,87',
    date: '21/06/2023',
    type: 0 //gastos
},

{
    id: 2,
    label: 'Pix Cliente',
    value: '934,69',
    date: '25/06/2023',
    type: 1 //Receitas
},

{
    id: 3,
    label: 'Pix Cliente',
    value: '858,69',
    date: '30/06/2023',
    type: 1 //Receitas
},

]



export default function Home() {
  return (
    <View style={styles.container}>
        <Header name=" Luiz Henrique"/>

        <Balance saldo="1976,69"  gastos="-345,87"/>

        <Actions/>

        <Text style={styles.title}>Últimas Movimentações</Text>

        <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
        />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
   },
   title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    
 },

 list:{
    marginStart: 14,
    marginEnd: 14,
 }






});
