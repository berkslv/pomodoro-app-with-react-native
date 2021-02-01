/*
  Amaç: Root navigasyon elementleri oluşturuldu. Temel yapıların ayrıntıları BottomTabNavigator.tsx 
        içerisinde yapılıyor.
  Son düzenlenme: 30/01/2021
  Son düzenleyen: berk selvi
  React navigation docs: https://reactnavigation.org/docs/getting-started
  Stack navigation docs: https://reactnavigation.org/docs/modal
*/
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// React navigation için temel yapı oluşturuldu.
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// Root stack navigator oluşturuldu. Bu modelleri diğer tüm içeriğin üstünde görüntülemek için kullanılır
const Stack = createStackNavigator<RootStackParamList>();

// Root olarak BottomTabNavigator a gider. Eğer bir hata olursa NotFoundScreen sayfasına yönlendirilir.
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
