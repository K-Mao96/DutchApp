import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LogInScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

// 割り勘アプリ
import HomeScreen from './src/screens/HomeScreen';
import ReimbursementListScreen from './src/screens/ReimbursementListScreen';
import ReimbursementCreateScreen from './src/screens/ReimbursementCreateScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#467fd3' },
          headerTitleStyle: { color: '#fff' },
          headerTitle: 'Memo App',
          headerTintColor: '#fff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />

        {/* 割り勘アプリ */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ReimbursementList" component={ReimbursementListScreen} />
        <Stack.Screen name="ReimbursementCreate" component={ReimbursementCreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
