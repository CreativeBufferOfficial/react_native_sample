import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
  onPress?: () => void;
  [x: string]: any;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const MaterialIcon = ({size, name, color, onPress}: IconProps) => (
  <Icon name={name} size={IconSizes[size]} color={color} onPress={onPress} />
);
