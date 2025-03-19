import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingNavigator from './onboarding/OnboardingNavigator';
import TabsController from './tabs/TabsController';

const Stack = createNativeStackNavigator();

const App = () => {
  const [firstLaunch, setFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIfFirstLaunch = async () => {
      try {
        const alreadyLaunched = await AsyncStorage.getItem('alreadyLaunched');
        if (alreadyLaunched === null) {
          await AsyncStorage.setItem('alreadyLaunched', 'true');
          setFirstLaunch(true);
        } else {
          setFirstLaunch(false);
        }
      } catch (error) {
        console.error("AsyncStorage Error: ", error);
      }
    };
    checkIfFirstLaunch();
  }, []);
  
  if (firstLaunch === null) return null; // Ladezustand abwarten

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {firstLaunch ? (
          <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        ) : (
          <Stack.Screen name="MainTabs" component={TabsController} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
