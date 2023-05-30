import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import {FontSize} from '../utilities/constent';
type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};
export const CustomModal = ({
  isVisible = false,
  children,
  ...props
}: ModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      animationInTiming={200}
      //animationOutTiming={200}
      //backdropTransitionInTiming={100}
      //backdropTransitionOutTiming={100}
      {...props}>
      {children}
    </Modal>
  );
};

const CustomModalContainer = ({children}: {children: React.ReactNode}) => (
  <View style={styles.container}>{children}</View>
);

const CustomModalHeader = ({title}: {title: string}) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const CustomModalBody = ({children}: {children?: React.ReactNode}) => (
  <View style={styles.body}>{children}</View>
);

const CustomModalFooter = ({children}: {children?: React.ReactNode}) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBF5FB',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },
  text: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: FontSize.FS_19,
    fontWeight: '600',
  },
  body: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    minHeight: 100,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
});

CustomModal.Header = CustomModalHeader;
CustomModal.Container = CustomModalContainer;
CustomModal.Body = CustomModalBody;
CustomModal.Footer = CustomModalFooter;
