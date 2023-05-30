import {View, Text, StyleSheet} from 'react-native';
import {FontSize} from '../utilities/constent';
import {ShadowStyle} from '../utilities/globalStyle';

type CardProps = {
  children: React.ReactNode;
};

export const Card = (props: CardProps) => {
  const {children} = props;
  return <View style={styles.cardOuterView}>{children}</View>;
};

export const styles = StyleSheet.create({
  cardOuterView: {
    ...ShadowStyle.Shadow,
    backgroundColor: '#F2F3F4',
    padding: 7,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  lableStyle: {
    fontSize: FontSize.FS_16,
    fontWeight: '600',
    marginVertical: 10,
  },
});
