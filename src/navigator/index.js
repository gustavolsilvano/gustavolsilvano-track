import React, { useContext } from 'react';

import { Context as AuthContext } from '../context/AuthContext';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';

import TrackDetailScreen from '../screens/TrackDetailScreen';

import ResolveAuthScreen from '../screens/ResolveAuthScreen';

import TabNavigator from './tabNavigator';

const Stack = createStackNavigator();

export default () => {
  const { state } = useContext(AuthContext);
  const { token } = state;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Resolve"
        options={{ headerShown: false }}
      >
        <>
          {state.isLoading && (
            <Stack.Screen
              name="Resolve"
              component={ResolveAuthScreen}
              options={{ headerShown: false }}
            />
          )}
          {!token ? (
            <>
              <Stack.Screen
                name="Signin"
                component={SigninScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Tab"
                component={TabNavigator}
                options={({ route }) => {
                  if (
                    !route.hasOwnProperty('state') ||
                    route.state.routeNames[route.state.index] === 'Track List'
                  )
                    return { title: 'Track' };
                  return {
                    headerShown: false
                  };
                }}
              />
              <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
            </>
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
