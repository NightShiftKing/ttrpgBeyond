import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';


export default function DungeonDragonsLayout() {
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
      <Tabs.Screen name="DungeonDragons" options={{ title: 'Dungeons and Dragons',
        tabBarIcon: ({color})=>(
            <FontAwesome6 name="dragon" size={24} color={color} />
        ),
       }} />
      <Tabs.Screen name="D&DCharacterCreator" options={{ title: 'Charcter Creator',
        tabBarIcon: ({color})=>(
            <Ionicons name={'person-add'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen name="D&DCharacterLoader" options={{ title: 'Character Loader',
        tabBarIcon: ({color})=>(
          <FontAwesome name="save" size={24} color={color} />
        ),
       }} />
      <Tabs.Screen name="D&DGMtools" options={{ title: 'GM tools',
        tabBarIcon: ({color})=>(
            <Entypo name={'tools'} color={color} size={24} />
        ),
       }} /> 
    </Tabs>
  );
}
