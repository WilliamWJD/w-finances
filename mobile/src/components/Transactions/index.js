import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

import api from '../../services/api'

const Transactions = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        async function loadTransactions() {
            const response = await api.get('/transactions')
            console.log(response.data)
            setTransactions(response.data)
        }
        loadTransactions()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Transações</Text>
            <ScrollView style={styles.transactionsContainer}>
                {transactions.map(transac => (
                    <TouchableOpacity
                        style={styles.transaction}
                        key={transac.id}
                        onLongPress={() => Alert.alert(transac.description)}
                    >
                        <View style={styles.transactionBox}>
                            <Svg height="40" width="40" viewBox="0 0 100 100">
                                <Circle cx="50" cy="50" r="45" strokeWidth="2.5" fill={transac.Category.color} />
                            </Svg>
                            <View style={styles.transactionLegend}>
                                <Text style={styles.transactionLegendTitle}>{transac.description}</Text>
                                <Text style={styles.transactionLegendCategory}>{transac.Category.description} | {transac.Account.description}</Text>
                            </View>
                        </View>
                        <Text
                            style={[
                                transac.Category.type === "DESPESAS"
                                    ? { color: "#e74c3c" }
                                    : { color: "#27ae60" }
                                , styles.transactionLegendValue
                            ]}
                        >
                            {transac.Category.type === "DESPESAS"
                                ? `- R$: ${transac.amount}`
                                : `R$: ${transac.amount}`
                            }
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
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
        marginBottom: 10
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
        fontWeight: "bold"
    }

})

export default Transactions
