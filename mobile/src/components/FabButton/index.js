import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ActionButton from 'react-native-action-button';
import { MaterialIcons } from '@expo/vector-icons'

const FabButton = () => {
    return (
        <ActionButton buttonColor="#6E21D1">
            <ActionButton.Item buttonColor='#e74c3c' title="Contas" onPress={() => console.log("notes tapped!")}>
                <MaterialIcons name="account-balance" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Categorias" onPress={() => { }}>
                <MaterialIcons name="receipt" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#27ae60' title="Receitas" onPress={() => { }}>
                <MaterialIcons name="call-made" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#c0392b' title="Despesas" onPress={() => { }}>
                <MaterialIcons name="call-received" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>
    )
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
    },
})

export default FabButton
