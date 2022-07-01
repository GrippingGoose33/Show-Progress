import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"/>
    </View>
  );
}