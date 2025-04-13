import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../../../components/navbar'

const Css = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>CSS</Text>
      </View>
  
  )
}

export default Css

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: '#fff',
      },
})