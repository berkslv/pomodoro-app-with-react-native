/**
 * @file Screen for timer (pomodoro) component.
 * @author Berk selvi
 * @license Apache-2.0
 */
import * as React from 'react';
import { StyleSheet } from 'react-native';

import Timer from '../components/Timer';
import { View } from '../components/Themed';

export default function PomodoroScreen() {
  return (
    <View style={styles.container}>
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
