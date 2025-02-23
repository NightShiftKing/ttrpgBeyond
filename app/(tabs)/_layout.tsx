import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#ffd33d',
            headerStyle: {
              backgroundColor: '#25292e',
            },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: {
            backgroundColor: '#25292e',
            },
        }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home',
        tabBarIcon: ({color, focused})=>(
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen name="D&D" options={{ title: 'D&D',
        tabBarIcon: ({color, focused})=>(
            <FontAwesome5 name={'dragon'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen name="CyberPunk" options={{ title: 'CyperPunk',
        tabBarIcon: ({color, focused})=>(
            <FontAwesome5 name={'usb'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen name="PathFinder" options={{ title: 'PathFinder',
        tabBarIcon: ({color, focused})=>(
            <MaterialCommunityIcons name={'sword'} color={color} size={24} />
        ),
       }} />
    </Tabs>
  );
}
