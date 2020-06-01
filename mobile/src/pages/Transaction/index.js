import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const Transaction = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="keyboard-arrow-left" size={35}/>
            </View>

            <Text>Cadastrar nova receita</Text>

            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <MaterialIcons name="description" size={20} color="#BDC3C7"/>
                    <TextInput placeholder="Decrição" style={styles.input}/>
                </View>
                <View style={styles.inputGroup}>
                    <MaterialIcons name="library-books" size={20} color="#BDC3C7"/>
                    <TextInput placeholder="Categoria"/>
                </View>
                <View style={styles.inputGroup}>
                    <MaterialIcons name="account-balance" size={20} color="#BDC3C7"/>
                    <TextInput placeholder="Conta"/>
                </View>
                <View style={styles.inputGroup}>
                    <MaterialIcons name="attach-money" size={20} color="#BDC3C7"/>
                    <TextInput placeholder="Valor R$"/>
                </View>

                <TouchableOpacity>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        // alignItems:'center',
        // justifyContent:'center'
    },

    header:{
        marginTop:30
    },

    form:{
        margin:10
    },

    inputGroup:{
        flexDirection:'row',
        borderBottomWidth:1,
        height:60,
        alignItems:'center'
    },

    input:{
        flex:1,
        height:50,
        borderWidth:1
    }
})

export default Transaction
