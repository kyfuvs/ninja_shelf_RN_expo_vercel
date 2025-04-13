import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';

const Layout = ({ children }) => {
//   const isDarkMode = useColorScheme() === 'dark';
  const isDarkMode = true; // <-- force dark mode if preferred

  return (
    <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dark: {
    backgroundColor: '#000',
  },
  light: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
  },

});

export default Layout;
