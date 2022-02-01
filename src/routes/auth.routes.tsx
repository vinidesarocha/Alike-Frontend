import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import CreateAccount from '../pages/SignUp/CreateAccount';
import ProfileOne from '../pages/SignUp/ProfileOne';
import ProfileTwo from '../pages/SignUp/ProfileTwo';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FCFCFC' },
    }}
    initialRouteName="ProfileTwo"
  >
    {/* Public Routes */}
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="CreateAccount" component={CreateAccount} />
    <Auth.Screen name="ProfileOne" component={ProfileOne} />
    <Auth.Screen name="ProfileTwo" component={ProfileTwo} />
  </Auth.Navigator>
);

export default AuthRoutes;

// routes -> pages -> (profileThree): index.tsx, styles.ts
