import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList} from './types';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Task"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',

          // headerStyle: {
          //   backgroundColor: 'transparent',
          // },
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
