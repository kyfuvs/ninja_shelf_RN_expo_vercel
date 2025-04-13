import { Tabs } from 'expo-router';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
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
      {/* <ion-icon name="logo-css3"></ion-icon> */}
      <Tabs.Screen
        name="css"
        options={{
          title: 'CSS',
          tabBarIcon: ({ color, size }) => (
            // <MaterialIcons name="css" size={size} color={color} />
            <Ionicons name="logo-css3" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bs"
        options={{
          title: 'Bootstrap',
          tabBarIcon: ({ color, size }) => (
            // <MaterialIcons name="phone" size={size} color={color} />
            <FontAwesome name="bold" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
