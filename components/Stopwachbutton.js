import React from 'react';
import { TouchableOpacity, Text, } from 'react-native';
import { StyleSheet } from 'react-native';

export const StartButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text className="text-4xl font-bold text-green-600">Start</Text>
  </TouchableOpacity>
);

export const PauseButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}  style={styles.button}>
    <Text className="text-4xl font-bold text-green-600">Pause</Text>
  </TouchableOpacity>
);

export const ResetButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}  style={styles.button}>
    <Text className="text-4xl font-bold text-red-600">End</Text>
  </TouchableOpacity>
);

const styles=StyleSheet.create({
  button: {
        backgroundColor: '',
        padding: 8,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
})