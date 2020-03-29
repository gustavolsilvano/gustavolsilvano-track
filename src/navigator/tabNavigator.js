import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AccountScreen from '../screens/AccountScreen';
import TrackListScreen from '../screens/TrackListScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';

import { FontAwesome } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="TrackList"
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case 'Track List':
              iconName = 'th-list';
              break;
            case 'Track Create':
              iconName = 'plus';
              break;
            case 'Account':
              iconName = 'gear';
              break;

            default:
              break;
          }
          focused ? (color = 'tomato') : (color = 'gray');
          return <FontAwesome name={iconName} color={color} size={20} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: true,
        iconStyle: {
          height: 20,
          alignSelf: 'center',
          marginLeft: 4
        }
      }}
    >
      <Tab.Screen
        name="Track List"
        component={TrackListScreen}
        options={{ title: 'Tracks' }}
      />
      <Tab.Screen
        name="Track Create"
        component={TrackCreateScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
