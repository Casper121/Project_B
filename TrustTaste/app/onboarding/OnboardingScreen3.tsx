import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Navigation-Typen definieren
type OnboardingStackParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  MainTabs: undefined;
};

type Props = NativeStackScreenProps<OnboardingStackParamList, 'Onboarding3'>;

const OnboardingScreen3: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You're all set! 🎉</Text>
      <Text style={styles.subtitle}>Start exploring your personalized food options.</Text>
      <Button title="Finish" onPress={() => navigation.replace('MainTabs')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', paddingHorizontal: 20, marginBottom: 20 },
});

export default OnboardingScreen3;
