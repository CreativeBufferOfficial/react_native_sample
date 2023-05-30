import {Dimensions, StyleSheet} from 'react-native';
import {FontSize} from '../../utilities/constent';

export const style = StyleSheet.create({
  addNewTaskView: {
    position: 'absolute',
    bottom: 80,
    right: 0,
  },
  addNewTaskButton: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#FFF',
    elevation: 4,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F618D',
  },
  TextInputControl: {
    padding: 6,
    borderRadius: 5,
    borderWidth: 1,
    height: 45,
    borderColor: '#D6DBDF',
  },
  SaveButton: {
    backgroundColor: '#1B4F72',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: FontSize.FS_16,
  },
  closeButton: {
    backgroundColor: '#E74C3C',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  taskDeleteButton: {
    backgroundColor: '#FADBD8',
    padding: 5,
    borderRadius: 5,
  },
});
