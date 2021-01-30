import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import PomodoroScreen from '../screens/PomodoroScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, PomodoroParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    // Bottom [Alt] kısımdaki navigasyon
    <BottomTab.Navigator
      initialRouteName="Pomodoro"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Pomodoro"
        component={PomodoroNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Icon için gerekli işlemler
  // You can explore the built-in icon families and icons on the web at: https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Top [Üst] kısımdaki sadece isim belirteçleri. 
  // Bir navigasyon belirtmiyor fakat isim için navigasyon alt yapısı kullanılıyor.
  // Each tab has its own navigation stack, you can read more about this pattern here: https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
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

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
