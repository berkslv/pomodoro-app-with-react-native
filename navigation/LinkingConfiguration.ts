/*
  Amaç: Uygulama ekranlarını linkliyor ve navigasyon işlemlerini bu linkler ile yapıyoruz.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
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
