import {Tabs} from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => {
            return <FontAwesome5 name="user" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => {
            return <Feather name="settings" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
