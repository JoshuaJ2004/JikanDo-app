import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Main from './src/components/Main.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A3350',
  },
});
