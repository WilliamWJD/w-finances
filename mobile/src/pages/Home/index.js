import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ActionButton from 'react-native-action-button';
import { MaterialIcons } from '@expo/vector-icons'

import Header from '../../components/Header'
import PanelTypes from '../../components/PanelTypes'
import Transactions from '../../components/Transactions'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <PanelTypes />
            <Transactions />
            
            <ActionButton buttonColor="#6E21D1">
                <ActionButton.Item buttonColor='#e74c3c' title="Contas" onPress={() => console.log("notes tapped!")}>
                    <MaterialIcons name="account-balance" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Categorias" onPress={() => { }}>
                    <MaterialIcons name="category" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#27ae60' title="Receitas" onPress={() => { }}>
                    <MaterialIcons name="call-made" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#c0392b' title="Despesas" onPress={() => { }}>
                    <MaterialIcons name="call-received" style={styles.actionButtonIcon}/>
                </ActionButton.Item>
            </ActionButton>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 22,
    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
    },
})



