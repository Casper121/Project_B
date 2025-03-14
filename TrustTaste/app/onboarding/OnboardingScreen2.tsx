
import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Navigation-Typen definieren
type OnboardingStackParamList = {
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
};

type Props = NativeStackScreenProps<OnboardingStackParamList, 'Onboarding2'>;

// Allergie-Optionen
const intolerances = [
  { id: '1', name: 'Lactose Intolerance' },
  { id: '2', name: 'Fructose Intolerance' },
  { id: '3', name: 'Histamine Intolerance' },
  { id: '4', name: 'Gluten Intolerance' },
  { id: '5', name: 'Tyramine Intolerance' },
];

const OnboardingScreen2: React.FC<Props> = ({ navigation }) => {
  // ✅ useState richtig typisiert
  const [selectedIntolerances, setSelectedIntolerances] = useState<string[]>([]);

  // ✅ id als string typisiert
  const toggleSelection = (id: string) => {
    setSelectedIntolerances((prev: string[]) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your intolerances</Text>
      <FlatList
        data={intolerances}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              selectedIntolerances.includes(item.id) && styles.selectedItem,
            ]}
            onPress={() => toggleSelection(item.id)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Next" onPress={() => navigation.navigate('Onboarding3')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  item: { padding: 15, marginVertical: 5, backgroundColor: '#f0f0f0', width: '100%', borderRadius: 10 },
  selectedItem: { backgroundColor: '#A7E9AF' },
});

export default OnboardingScreen2;
