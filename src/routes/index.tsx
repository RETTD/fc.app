import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routeOverlayOption } from './routeOptions';
import { MainStackScreen } from './stacks/MainStack';

//Main Stack is a stack of all screens in the app
//In future we probably can add here some other stacks like HomePage, SettingsPage etc.

const RootStack = createStackNavigator();

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator screenOptions={{ presentation: 'modal', ...routeOverlayOption, headerShown: false}}>
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
