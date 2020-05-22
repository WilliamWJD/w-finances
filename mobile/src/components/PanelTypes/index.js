import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import IconCredit from '../../assets/IconCredit.png'
import IconDebt from '../../assets/IconDebt.png'

const PanelTypes = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxReceitas}>
                <Image source={IconCredit}/>
                <View style={styles.boxReceitasDescription}>
                    <Text style={styles.boxReceitasDescriptionTitle}>Receitas</Text>
                    <Text style={styles.boxReceitasDescriptionValue}>R$: 550,00</Text>
                </View>
            </View>
            <View style={styles.boxDespesas}>
                <Image source={IconDebt}/>
                <View style={styles.boxDespesasDescription}>
                    <Text style={styles.boxDespesasDescriptionTitle}>Despesas</Text>
                    <Text style={styles.boxDespesasDescriptionValue}>R$: 550,00</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:110,
        backgroundColor:"#fff",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        marginTop:-50,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
    },

    boxReceitas:{
        width:165,
        flexDirection:"row",
        borderTopLeftRadius:50,
        padding:20,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ECF0F1"
    },

    boxDespesas:{
        width:165,
        flexDirection:"row",
        borderTopRightRadius:50,
        padding:20,
        marginRight:10,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#ECF0F1"
    },

    boxReceitasDescription:{
        marginLeft:10
    },

    boxDespesasDescription:{
        marginLeft:10
    },

    boxReceitasDescriptionTitle:{
        color:"#727A7A",
        fontSize:15
    },

    boxReceitasDescriptionValue:{
        color:"#27AE60",
        fontWeight:"bold",
        fontSize:15
    },

    boxDespesasDescriptionTitle:{
        color:"#727A7A",
        fontSize:15
    },

    boxDespesasDescriptionValue:{
        color:"#27AE60",
        fontWeight:"bold",
        fontSize:15
    }
})

export default PanelTypes
