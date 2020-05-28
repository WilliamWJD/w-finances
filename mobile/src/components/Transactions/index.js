import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

const Transactions = () => {
    const [transactions, setTransactions] = useState([
        {
            id: 1,
            description: "Mercado",
            category: {
                id: 1,
                description: "Alimentação",
                color:"#e74c3c"
            },
            account: {
                id: 1,
                description: "Conta corrente"
            },
            ammount: 250
        },
        {
            id: 2,
            description: "Lanche",
            category: {
                id: 3,
                description: "Lanche",
                color:"#34495e"
            },
            account: {
                id: 1,
                description: "Conta corrente"
            },
            ammount: 50
        },
        {
            id: 3,
            description: "Remédio",
            category: {
                id: 2,
                description: "Farmacia",
                color:"#2980b9"
            },
            account: {
                id: 2,
                description: "Carteira"
            },
            ammount: 75.50
        },

    ])

    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Transações</Text>
            <View style={styles.transactionsContainer}>
                {transactions.map(transac => (
                    <TouchableOpacity style={styles.transaction} key={transac.id}>
                        <View style={styles.transactionBox}>
                            <Svg height="40" width="40" viewBox="0 0 100 100">
                                <Circle cx="50" cy="50" r="45" strokeWidth="2.5" fill={transac.category.color} />
                            </Svg>
                            <View style={styles.transactionLegend}>
                                <Text style={styles.transactionLegendTitle}>{transac.description}</Text>
                                <Text style={styles.transactionLegendCategory}>{transac.category.description} | {transac.account.description}</Text>
                            </View>
                        </View>
                        <Text style={styles.transactionLegendValue}>R$: {transac.ammount}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },

    containerTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#7F8C8D",
        marginTop: 10
    },

    transactionsContainer: {
        flex: 1,
        marginTop: 15
    },

    transaction: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom:10
    },

    transactionBox: {
        flexDirection: "row"
    },

    transactionLegend: {
        marginLeft: 13
    },

    transactionLegendTitle: {
        fontSize: 15,
    },

    transactionLegendCategory: {
        color: "#7F8C8D",
        fontSize: 13
    },

    transactionLegendValue: {
        color: "#E74C3C",
        fontWeight: "bold"
    }

})

export default Transactions
