import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// ✅ Navigation-Typen definieren
type OnboardingStackParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  MainTabs: undefined; // Falls du nach dem Onboarding zur Hauptnavigation wechselst
};

// ✅ Richtiger Typ für Navigation & Route
type OnboardingScreenProps = NativeStackScreenProps<OnboardingStackParamList, 'Onboarding1'>;

const OnboardingScreen1 = ({ navigation }: OnboardingScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TrustTaste!</Text>
      <Text style={styles.subtitle}>Find restaurants or scan food for intolerances and allergies.</Text>
      <Button title="Next" onPress={() => navigation.navigate('Onboarding2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', paddingHorizontal: 20, marginBottom: 20 },
});

export default OnboardingScreen1;
