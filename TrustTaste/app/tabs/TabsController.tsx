import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import FirstPage from './pages/FirstPage';
import Settings from './pages/Settings';
import CameraManager from './pages/camera/CameraManager';
import DietaryProfile from './pages/DietaryProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 👇 deine Tab-Leiste
const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Users" />
    <BottomNavigationTab title="Camera" icon={props => <Icon {...props} name="camera-outline" />} />
    <BottomNavigationTab title="Settings" icon={props => <Icon {...props} name="settings-outline"/>} />
  </BottomNavigation>
);

// 👇 die Tabs, die unten in der Leiste angezeigt werden
const TabNavigator = () => (
  <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Tab.Screen name="FirstPage" component={FirstPage} />
    <Tab.Screen name="Camera" component={CameraManager} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

// 👇 hier wird dein Stack definiert: Tabs + zusätzliche Screens
const TabsController = () => (
  <Stack.Navigator screenOptions={{ headerShown: true, headerStyle: {backgroundColor: '#2FC916'}, headerTintColor: '#fff', headerTitleAlign: 'center', }}>
    <Stack.Screen name="MainTabs" component={TabNavigator} options={{headerShown: false}}/>
    <Stack.Screen name="DietaryProfile" component={DietaryProfile} options={{ title: 'Edit Profile'}}/>
  </Stack.Navigator>
);

export default TabsController;
