import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WelcomeProps {
  name?: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export const Welcome: React.FC<WelcomeProps> = ({ name = 'World' }) => (
  <View style={styles.container} testID="welcome-container">
    <Text style={styles.text} testID="welcome-text">
      Welcome to {name}!
    </Text>
  </View>
);
