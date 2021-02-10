/**
 * @file It was created to fill and style navigation components.
 *  Check out, {@link https://icons.expo.fyi/} for icon docs 
 *  and {@link https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab} stack nav. docs.
 * @author Berk selvi
 * @license Apache-2.0
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

// Necessary operations for icons in the bottom navigation.
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Created bottom tab navigator.
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// Created component for bottom navigation
export default function BottomTabNavigator() {
  // access to system colors.
  const colorScheme = useColorScheme();


  return (
    <BottomTab.Navigator
      initialRouteName="Pomodoro"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, style: { height:80 } }}>
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


// Stack navigator created for pomodoro.
const PomodoroStack = createStackNavigator<PomodoroParamList>();

function PomodoroNavigator() {
  return (
    <PomodoroStack.Navigator>
      <PomodoroStack.Screen
        name="PomodoroScreen"
        component={PomodoroScreen}
        options={{ headerTitle: 'Pomodoro', headerTitleAlign: "center" }}
      />
    </PomodoroStack.Navigator>
  );
}

// Stack navigator created for settings
const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Settings', headerTitleAlign: "center" }}
      />
    </SettingsStack.Navigator>
  );
}
