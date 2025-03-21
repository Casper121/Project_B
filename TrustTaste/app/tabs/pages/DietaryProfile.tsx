import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Layout, Text, CheckBox, TopNavigation, TopNavigationAction, Icon, RadioGroup, Radio } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';


const DietaryProfile: React.FC = () => {
  const navigation = useNavigation();

  // Liste von Intoleranzen & Allergien
  const [intolerances, setIntolerances] = useState([
    { id: 1, label: '🥛 Lactose Intolerance', checked: false },
    { id: 2, label: '🍏 Fructose Intolerance', checked: false },
    { id: 3, label: '🍷 Histamine Intolerance', checked: false },
    { id: 4, label: '🧀 Tyramine Intolerance', checked: false },
    { id: 5, label: '🍓 Xylitol Intolerance', checked: false },
  ]);

  const [allergies, setAllergies] = useState([
    { id: 6, label: '🥚 Eggs', checked: false },
    { id: 7, label: '🥛 Milk', checked: false },
    { id: 8, label: '🌽 Corn', checked: false },
    { id: 9, label: '🌾 Wheat', checked: false },
  ]);

  // 🚀 NEU: Dietary Form als Single-Selection (Radio Buttons)
  const [selectedDietaryForm, setSelectedDietaryForm] = useState(0);

  const dietaryForms = [
    'Not preference',
    'Vegetarian 🥦',
    'Pescetarian 🐟',
    'Vegan 🌻',
  ];

  // Funktion zum Umschalten der Checkboxen
  const toggleCheck = (id: number, category: 'intolerance' | 'allergy') => {
    if (category === 'intolerance') {
      setIntolerances((prev) =>
        prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
      );
    } else {
      setAllergies((prev) =>
        prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
      );
    }
  };

  return (
    <Layout style={styles.container}>

      {/* Scrollbarer Bereich */}
      <ScrollView style={styles.content}>
        {/* Intolerances */}
        <Text category="h6" style={styles.sectionTitle}>Intolerances</Text>
        {intolerances.map((item) => (
          <CheckBox
            key={item.id}
            checked={item.checked}
            onChange={() => toggleCheck(item.id, 'intolerance')}
            style={styles.checkbox}
            
          >
            {item.label}
          </CheckBox>
        ))}

        {/* Allergies */}
        <Text category="h6" style={styles.sectionTitle}>Allergies</Text>
        {allergies.map((item) => (
          <CheckBox
            key={item.id}
            checked={item.checked}
            onChange={() => toggleCheck(item.id, 'allergy')}
            style={styles.checkbox}
          >
            {item.label}
          </CheckBox>
        ))}

        {/* 🚀 NEU: Dietary Form mit Radio Buttons */}
        <Text category="h6" style={styles.sectionTitle}>Dietary Form</Text>
        <RadioGroup
          selectedIndex={selectedDietaryForm}
          onChange={(index) => setSelectedDietaryForm(index)}
        >
          {dietaryForms.map((label, index) => (
            <Radio key={index} style={styles.radio}>{label}</Radio>
          ))}
        </RadioGroup>
      </ScrollView>
    </Layout>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: '#2FC916', // Grüner Header
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  checkbox: {
    marginVertical: 5,
  },
  radio: {
    marginVertical: 5,
  },
});

export default DietaryProfile;
