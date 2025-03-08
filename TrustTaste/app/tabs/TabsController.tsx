import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon, IconElement, Layout, Text } from '@ui-kitten/components';
import { FirstPage } from './pages/FirstPage';
import { SecondPage } from './pages/SecondPage';
import { CameraManager } from './pages/camera/CameraManager';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='USERS'/>
    <BottomNavigationTab icon={<Icon name="camera-outline"/>} />
    <BottomNavigationTab title='ORDERS'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='First Page' component={FirstPage}/>
    <Screen name='Camera' component={CameraManager}/>
    <Screen name='Second Page' component={SecondPage}/>
  </Navigator>
);

export const TabsController = () => <TabNavigator/>

