import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Navigation from './navegation.js';
import Main from './src/components/Main.jsx'
import user from 'jikando-app/screens/HomeScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3350',
  },
});
