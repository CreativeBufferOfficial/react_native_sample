import {Text, StyleSheet} from 'react-native';
import {FontSize} from '../utilities/constent';

type LabelProp = {
  name: string;
};

export const Label = ({name}: LabelProp) => {
  return <Text style={styles.lableStyle}>{name}</Text>;
};

export const styles = StyleSheet.create({
  lableStyle: {
    fontFamily: 'Poppins-Medium',
    fontSize: FontSize.FS_16,
    fontWeight: '600',
    marginVertical: 10,
  },
});
