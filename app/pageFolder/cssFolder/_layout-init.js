// app/css/_layout.js
import { View, Text } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import Navbar from '../../../components/navbar';

export default function CssLayout() {
  return (
    <Drawer
      screenOptions={{
        // headerShown: false,
        headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',

        drawerStyle: {
            backgroundColor: 'black',
          },
          drawerActiveTintColor: 'white',
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'CSS Home',
        //   title: 'CSS Page',
        headerTitle: () => (
            <View style={{ flex: 1, alignItems: 'stretch' }}>
              <Navbar />
            </View>
          ),
          
        }}
      />
      {/* You can add more nested CSS pages here */}
    </Drawer>
  );
}
