import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Home from '../pageFolder/homeFolder/home'
import Navbar from '../components/navbar'

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar/>
      <View style={styles.container}>
        {/* <Text>index</Text> */}
        {/* <Home/> */}
        
        <Text style={styles.text}>HOME</Text>
      </View>
    </View>
  )
}

export default index

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