import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import Header from '../../components/Header'
import PanelTypes from '../../components/PanelTypes'
import Transactions from '../../components/Transactions'
import FabButton from '../../components/FabButton'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <PanelTypes />
            <Transactions />

            <FabButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 22,
    },
})

export default Home




