// app/_layout.js
import { Tabs } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'black',
            marginBottom: 5, // 👈 Add this
          },
          tabBarActiveTintColor: 'white',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home-filled" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="pageFolder/cssFolder"
          options={{
            title: 'CSS',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="logo-css3" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="pageFolder/bsFolder"
          options={{
            title: 'Bootstrap',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="bold" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
