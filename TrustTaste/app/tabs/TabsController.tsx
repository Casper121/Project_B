import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon, IconElement, Layout, Text } from '@ui-kitten/components';
import CameraIcon from '../atoms/icons/camera';
import { FirstPage } from './pages/FirstPage';
import { SecondPage } from './pages/SecondPage';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='USERS'/>
    <BottomNavigationTab title='ORDERS'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='First Page' component={FirstPage}/>
    <Screen name='Second Page' component={SecondPage}/>
  </Navigator>
);

export const TabsController = () => <TabNavigator/>

