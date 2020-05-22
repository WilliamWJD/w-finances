import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.boxBalance}>
                <TouchableOpacity style={styles.boxBalanceFilter}>
                    <Text style={styles.boxBalanceFilterText}>Maio</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxBalanceButton}>
                    <Text style={styles.boxBalanceSaldo}>Saldo Total</Text>
                    <Text style={styles.boxBalanceValue}>R$ 5.250,00</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:220,
        backgroundColor:"#7E3AD6",
        alignItems:"center",
    },

    boxBalance:{
        flex:1,
        alignItems:"center",
        marginTop:10
    },

    boxBalanceFilter:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },  

    boxBalanceFilterText:{
        color:"#fff",
        fontSize:18,
        fontWeight:"bold",
        marginRight:7
    },

    boxBalanceButton:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:27
    },

    boxBalanceSaldo:{
        color:"#fff",
        fontSize:16
    },

    boxBalanceValue:{
        color:"#fff",
        fontSize:30,
        marginTop:6,
        fontWeight:'bold'
    }
})

export default Header