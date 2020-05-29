import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 22,
    },
})



