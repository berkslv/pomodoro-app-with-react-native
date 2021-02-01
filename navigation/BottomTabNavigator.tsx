/*
  Amaç: Navigasyon componentlerinin içerisini doldurmak, stillendirmek için oluşturuldu.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
  Icon docs: https://icons.expo.fyi/
  Navigation stack docs: https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
*/
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PomodoroScreen from '../screens/PomodoroScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { BottomTabParamList, PomodoroParamList, SettingsParamList } from '../types';

// Bottom navigasyondaki icon için gerekli işlemler
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Bottom [Alt] kısımdaki navigasyon için oluşturma işlemi.
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// Bottom navigasyon için component oluşturuldu.
export default function BottomTabNavigator() {
  // Sistem renkleri hooks dosyası içerisindeki importtan elde ediliyor.
  const colorScheme = useColorScheme();

  // Farklı ekranlar için navigasyon config işlemi yapılıyor.
  return (
    <BottomTab.Navigator
      initialRouteName="Pomodoro"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Pomodoro"
        component={PomodoroNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="timer-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="settings-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


/* 
  Top [Üst] kısımdaki sadece isim belirteçleri. 
  Her tab kendi özel stack navigasyonuna sahiptir. Dokümantasyona yukarıdan ulaşabilirsin.
  Stack navigasyon içerisinde navigasyonu belirten ekran component olarak verilmekte.
*/

// Pomodoro için stack navigator oluşturuldu.
const PomodoroStack = createStackNavigator<PomodoroParamList>();

function PomodoroNavigator() {
  return (
    <PomodoroStack.Navigator>
      <PomodoroStack.Screen
        name="PomodoroScreen"
        component={PomodoroScreen}
        options={{ headerTitle: 'Pomodoro' }}
      />
    </PomodoroStack.Navigator>
  );
}

// Tab2 için stack navigator oluşturuldu.
const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Settings' }}
      />
    </SettingsStack.Navigator>
  );
}
