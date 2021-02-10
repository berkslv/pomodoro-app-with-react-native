/**
 * @file We do the linking and navigation operations of the application screens with these links.
 * @author Berk selvi
 * @license Apache-2.0
 */
import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Pomodoro: {
            screens: {
              PomodoroScreen: 'one',
            },
          },
          Settings: {
            screens: {
              SettingsScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
