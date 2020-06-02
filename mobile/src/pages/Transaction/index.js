import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const Transaction = () => {
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [account, setAccount] = useState('')
    const [amount, setAmmount] = useState(0)

    function onSave(){
        const data = { description, amount }
        console.log(data)
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.header}>
                <MaterialIcons name="keyboard-arrow-left" size={40} color="#7F8C8D"/>
                <Text style={styles.arrowLeftTitle}>Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.titleTransaction}>Cadastrar nova receita</Text>

            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <MaterialIcons name="description" size={25} color="#BDC3C7"/>
                    <TextInput 
                        placeholder="Decrição" 
                        style={styles.input} 
                        onChangeText={text =>{setDescription(text)}}
                        value={description}
                    />
                </View>
                <TouchableOpacity style={styles.inputGroup}>
                    <MaterialIcons name="library-books" size={25} color="#BDC3C7"/>
                    <TextInput placeholder="Categoria" style={styles.input}/>
                    <MaterialIcons name="keyboard-arrow-right" size={25} color="#BDC3C7"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.inputGroup}>
                    <MaterialIcons name="account-balance" size={25} color="#BDC3C7"/>
                    <TextInput placeholder="Conta" style={styles.input}/>
                    <MaterialIcons name="keyboard-arrow-right" size={25} color="#BDC3C7"/>
                </TouchableOpacity>
                <View style={styles.inputGroup}>
                    <MaterialIcons name="attach-money" size={25} color="#BDC3C7"/>
                    <TextInput 
                        placeholder="Valor R$" 
                        style={styles.input} 
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={text => setAmmount(text)}
                    />
                </View>

                <TouchableOpacity style={styles.cadastrar} onPress={onSave}>
                    <Text style={styles.cadastrarTitle}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center'
    },

    header:{
        marginTop:30,
        marginBottom:30,
        flexDirection:'row',
        alignItems:'center'
    },

    arrowLeftTitle:{
        fontSize:17,
        color: '#7F8C8D',
    },  

    titleTransaction:{
        color: '#6E21D1',
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center'
    },  

    form:{
        flex:1,
        margin:10,
        alignItems:"center",
        marginTop:20
    },

    inputGroup:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'#ddd',
        height:50,
        alignItems:'center',
        marginBottom:25,
    },

    input:{
        flex:1,
        height:50,
        marginLeft:10,
        fontSize:18,
        color:"#535353",
    },

    cadastrar:{
        backgroundColor: '#772ED5',
        width:229,
        height:57,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    },

    cadastrarTitle:{
        color:'#fff',
        fontWeight:'bold'
    }
})

export default Transaction
