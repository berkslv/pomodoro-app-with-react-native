/*
  Amaç: Pomodoro ekranı.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
*/
import * as React from 'react';
import { StyleSheet } from 'react-native';

import Timer from '../components/Timer';
import { Text, View } from '../components/Themed';

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
