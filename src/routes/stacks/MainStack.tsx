import React, {FC} from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Homepage from '@scenes/Homepage';
import RegistrationForm from '@scenes/Registration';

//Here is another navigation - for this app with current design I add name MainStack (probably becuase of MainContainer). In future I change that name for LogStack or something like that.
//I think in future here i will add LoginStack or LogOutStack etc. I'm not sure about plan for this app, but I think after get token from server app will have new Home app probably with some data.
//Thats why I have separeted MainStack for RootsStack (in RootStack we probably add another screen for logged users).

const MainStack = createStackNavigator();

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator 
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name='Register'
        component={RegistrationForm}
        options={{
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
          gestureEnabled: true,
          headerShown: false,
          gestureResponseDistance: 100,
          gestureDirection: "horizontal",
        }}
      />
    </MainStack.Navigator>
  );
};
{/* <MainStack.Screen
name="UsersList"
component={UsersList}
options={{
  headerShown: true,
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    paddingLeft: customTheme.space[5],
  },
  headerRightContainerStyle: {
    paddingRight: customTheme.space[5],
  },
  ...TransitionPresets.SlideFromRightIOS,
}}
/>
<MainStack.Screen
name="UserDetails"
component={UserDetails}
options={{
  headerShown: true,
  headerTitleAlign: 'center',
  headerLeftContainerStyle: {
    paddingLeft: customTheme.space[5],
  },
  headerRightContainerStyle: {
    paddingRight: customTheme.space[5],
  },
  ...TransitionPresets.SlideFromRightIOS,
}}
/> */}