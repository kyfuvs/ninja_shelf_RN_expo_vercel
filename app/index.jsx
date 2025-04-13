import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from './home';
import Navbar from './components/navbar';

const Index = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Index</Text> */}
      {/* <Home/> */}
      <Navbar/>
    </View>
  );
};

export default Index;

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

  
  
});
