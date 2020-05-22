import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import PanelTypes from '../../components/PanelTypes'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <PanelTypes/>
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



