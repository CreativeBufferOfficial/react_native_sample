import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {
  CompositeNavigationProp,
  RouteProp,
} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type HomeStackNavigatorParamList = {
  Task: undefined;
  Details: {
    name: string;
    birthYear: string;
  };
};

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Details'
>;

export type BottomTabNavigatorParamList = {
  Home: HomeStackNavigatorParamList;
  History: undefined;
  Settings: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackNavigatorParamList, 'Details'>,
  BottomTabNavigationProp<BottomTabNavigatorParamList, 'History'>
>;
