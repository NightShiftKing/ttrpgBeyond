import { Tabs } from 'expo-router';

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function CyberPunkLayout() {
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

      <Tabs.Screen name="CyberPunk" options={{ title: 'CyberPunk',
        tabBarIcon: ({color})=>(
            <AntDesign name="USB" size={24} color={color} />
        ),
       }} />
        <Tabs.Screen name="CharacterCreator" options={{ title: 'Charcter Creator',
        tabBarIcon: ({color})=>(
            <Ionicons name={'person-add'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen name="CharacterLoader" options={{ title: 'Character Loader',
        tabBarIcon: ({color})=>(
          <FontAwesome name="save" size={24} color={color} />
        ),
       }} />
      <Tabs.Screen name="GMtools" options={{ title: 'GM tools',
        tabBarIcon: ({color})=>(
            <Entypo name={'tools'} color={color} size={24} />
        ),
       }} /> 

    </Tabs>
  );
}
