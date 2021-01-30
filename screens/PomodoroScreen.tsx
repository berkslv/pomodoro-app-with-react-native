import * as React from 'react';
import { StyleSheet } from 'react-native';

import Timer from '../components/Timer';
import { Text, View } from '../components/Themed';

export default function PomodoroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Timer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
