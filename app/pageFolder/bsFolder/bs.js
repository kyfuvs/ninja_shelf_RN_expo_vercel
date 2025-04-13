import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const BS= () => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>BS</Text>
      </View>
  )
}

export default BS

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