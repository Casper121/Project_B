import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import FirstPage from './pages/FirstPage';
import Settings from './pages/Settings';
import CameraManager from './pages/camera/CameraManager';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Users" />
    <BottomNavigationTab title="Camera" icon={props => <Icon {...props} name="camera-outline" />} />
    <BottomNavigationTab title="Orders" />
  </BottomNavigation>
);

const TabsController = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="First Page" component={FirstPage} />
      <Tab.Screen name="Camera" component={CameraManager} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabsController;
