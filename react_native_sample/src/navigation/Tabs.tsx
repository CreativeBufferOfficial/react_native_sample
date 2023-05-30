import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabNavigatorParamList} from './types';
import HomeStackNavigator from './HomeStack';
import FeedScreen from '../screens/FeedScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {MaterialIcon} from '../components/Icon';
import {FontSize} from '../utilities/constent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        //headerShown: false,
        //tabBarActiveBackgroundColor: '#EBF5FB',
        //tabBarInactiveBackgroundColor: '#EBF5FB',
        tabBarActiveTintColor: '#1B4F72',
        tabBarInactiveTintColor: '#D4E6F1',
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: FontSize.FS_14,
        },

        tabBarStyle: {
          paddingBottom: 12,
          paddingVertical: 10,
          borderTopLeftRadius: 45,
          borderTopRightRadius: 45,
          height: 60 + insets.bottom,
          position: 'absolute',
          left: 0,
          bottom: 0,
          elevation: 0,
          borderTopWidth: 0,
          zIndex: 100,
          paddingHorizontal: 10,
          //backgroundColor: '#EAF2F8',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          headerTransparent: false,
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
          },
          tabBarLabel: 'Task',

          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcon
              name="format-list-bulleted-square"
              size={'large'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={FeedScreen}
        options={{
          headerStyle: {
            elevation: 0,
            backgroundColor: 'transparent',
            borderBottomWidth: 0,
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcon name="history" size={'large'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            elevation: 0,
            backgroundColor: 'transparent',
            borderBottomWidth: 0,
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcon name="cog" size={'large'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
