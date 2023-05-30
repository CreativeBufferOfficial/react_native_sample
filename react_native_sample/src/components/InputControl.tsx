import {TextInput, StyleSheet} from 'react-native';
import {FontSize} from '../utilities/constent';
import React from 'react';

type LabelProp = {
  value?: string | undefined;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  multilineHeight?: number;
  maxlength?: number | undefined;
  [x: string]: any;
};

export const InputControl = React.forwardRef<TextInput, LabelProp>(
  (props, ref) => {
    const {
      value,
      placeholder,
      onChangeText,
      multiline,
      numberOfLines,
      multilineHeight,
      maxlength,
    }: LabelProp = props;

    return (
      <TextInput
        ref={ref}
        value={value}
        placeholder={placeholder}
        style={{
          ...styles.TextInputControl,
          height: multiline ? multilineHeight : 45,
          textAlignVertical: multiline ? 'top' : 'center',
        }}
        multiline={true}
        numberOfLines={multiline ? numberOfLines : 1}
        onChangeText={onChangeText}
        maxLength={maxlength}
        {...props}
      />
    );
  },
);

export const styles = StyleSheet.create({
  TextInputControl: {
    padding: 6,
    borderRadius: 5,
    borderWidth: 1,
    height: 45,
    borderColor: '#D6DBDF',
  },
});
