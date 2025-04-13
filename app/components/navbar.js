import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.brand}>MyApp</Text>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => console.log('Home pressed')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('About pressed')}>
          <Text style={styles.link}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Contact pressed')}>
          <Text style={styles.link}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  brand: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  links: {
    flexDirection: 'row',
    gap: 15,
  },
  link: {
    color: '#ffcc00',
    fontSize: 16,
    marginLeft: 15,
  },
});
