import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';


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
      <Tabs.Screen name="CharacterCreator" options={{ title: 'Charcter Creator',
        tabBarIcon: ({color, focused})=>(
            <Ionicons name={'person-add'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen name="CharacterLoader" options={{ title: 'Character Loader',
        tabBarIcon: ({color, focused})=>(
            <Ionicons name={'person'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen name="GMtools" options={{ title: 'GM tools',
        tabBarIcon: ({color, focused})=>(
            <Entypo name={'tools'} color={color} size={24} />
        ),
       }} /> 
    </Tabs>
  );
}
