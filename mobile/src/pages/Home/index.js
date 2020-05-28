import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import PanelTypes from '../../components/PanelTypes'
import Transactions from '../../components/Transactions'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <PanelTypes/>
            <Transactions/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:22,
    }
})



