import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
// import Logo from '../assets/img/logo_dark.png'
import Logo from '../../assets/img/logo_dark.png'

const Home = () => {
  return (
    <View style={styles.container}>
     <Image source={Logo} style={styles.img} />
     <Text style={[styles.text, { fontSize: 18 }]}>Home</Text>
      <View style={styles.card}>
       <Text style={{ color: 'orange' }}>Hello, this is a Card</Text>
      </View>
    </View>
  );
};

export default Home;

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

  card: {
    marginTop: 5,
    backgroundColor: 'rgba(58, 55, 48, 0.4)',
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(231, 155, 14, 0.9)',
  
    // iOS shadow
    shadowColor: 'rgba(231, 155, 14, 1)',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  
    // Android elevation
    elevation: 10,
  },

  img: {
    marginVertical: 20,
    width: 100,
    height:100,
    borderRadius: 10,

  },
  
});
