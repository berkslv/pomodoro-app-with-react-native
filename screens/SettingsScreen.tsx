/**
 * @file Screen for settings component.
 * @author Berk selvi
 * @license Apache-2.0
 */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Settings from '../components/Settings';
import { View } from '../components/Themed';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Settings />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
