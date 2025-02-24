import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function PathFinderLayout() {
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
      <Tabs.Screen name="PathFinder" options={{ title: 'PathFinder',
        tabBarIcon: ({color})=>(
        <MaterialCommunityIcons name="sword-cross" size={24} color={color} />
        ),
       }} />
      <Tabs.Screen name="PFCharacterCreator" options={{ title: 'Charcter Creator',
        tabBarIcon: ({color})=>(
            <Ionicons name={'person-add'} color={color} size={24} />
        ),
       }} />
      <Tabs.Screen name="PFCharacterLoader" options={{ title: 'Character Loader',
        tabBarIcon: ({color})=>(
          <FontAwesome name="save" size={24} color={color} />
        ),
       }} />
      <Tabs.Screen name="PFGMtools" options={{ title: 'GM tools',
        tabBarIcon: ({color})=>(
            <Entypo name={'tools'} color={color} size={24} />
        ),
       }} /> 
    </Tabs>
  );
}
