import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  FlatList,
  Button,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../navigation/types';
import {MaterialIcon} from '../../components/Icon';
import {FontFamily, FontSize, todoListButtons} from '../../utilities/constent';
import {style} from './styles';
import {ShadowStyle} from '../../utilities/globalStyle';
import {CustomModal} from '../../components/Modal';
import {Label} from '../../components/Label';
import {InputControl} from '../../components/InputControl';
import {boolean, string} from 'yup';
import {todoObjectProp} from './types';
import {Card} from '../../components/Card';
import CheckBox from '@react-native-community/checkbox';

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const inputRef = React.useRef<TextInput | null>(null);
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false);
  //const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [task, setTask] = React.useState<todoObjectProp[]>([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const addNewDescriptionHandler = (text: string) => {
    setDescription(text);
  };

  const resetStateHandler = () => {
    setDescription('');
    //setTitle('');
  };

  const updateTaskObjectHandler = (index: number, mode: number) => {
    let tempObj;

    if (mode == todoListButtons.Delete) {
      tempObj = [...task];
      const tmpfilterObj = tempObj.filter((item, i) => i !== index);

      setTask(tmpfilterObj);
    } else {
      tempObj = [...task];
      tempObj[index].iscomplete = !tempObj[index].iscomplete;
      setTask(tempObj);
    }
  };

  const saveNewTaskHandler = () => {
    if (description) {
      const tempData = task.filter(item => item.description == description);
      if (tempData.length > 0) {
        Alert.alert('Description already exists.');
        inputRef.current?.focus();
        return false;
      }
      setTask([...task, {description, iscomplete: false}]);
      resetStateHandler();
      toggleModal();
    } else {
      Alert.alert('Please enter Add a description.');
      inputRef.current?.focus();
      return false;
    }
  };

  return (
    <View style={{flex: 1, paddingTop: 10}}>
      <Card>
        <Text style={{fontFamily: FontFamily.PoppinsBold}}>
          {"Today's Todo List"}
        </Text>
      </Card>
      <View>
        {task &&
          task.map((item, index) => {
            return (
              <Card key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    //alignItems: 'center',
                    justifyContent: 'space-between',
                    //padding: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      //alignItems: 'center',
                    }}>
                    <View>
                      <Pressable
                        style={{
                          backgroundColor: item.iscomplete ? '#0B5345' : '#fff',
                          padding: 5,
                          borderRadius: 5,
                          marginRight: 5,
                        }}
                        onPress={() =>
                          updateTaskObjectHandler(index, todoListButtons.Done)
                        }>
                        <MaterialIcon
                          size={'medium'}
                          color={item.iscomplete ? '#fff' : '#0B5345'}
                          name="check"
                          onPress={() =>
                            updateTaskObjectHandler(index, todoListButtons.Done)
                          }
                        />
                      </Pressable>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: Dimensions.get('screen').width - 110,
                      }}>
                      <Text
                        style={{
                          flexWrap: 'wrap',
                          fontFamily: FontFamily.PoppinsBold,
                          textDecorationLine: item.iscomplete
                            ? 'line-through'
                            : 'none',
                          //flexWrap: 'wrap',
                          textDecorationStyle: 'solid',
                        }}>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Pressable
                      onPress={() =>
                        updateTaskObjectHandler(index, todoListButtons.Delete)
                      }
                      style={style.taskDeleteButton}>
                      <MaterialIcon
                        size={'medium'}
                        color="#E74C3C"
                        name="delete"
                        onPress={() =>
                          updateTaskObjectHandler(index, todoListButtons.Delete)
                        }
                      />
                    </Pressable>
                  </View>
                </View>
              </Card>
            );
          })}
      </View>

      <View style={style.addNewTaskView}>
        <Pressable
          onPress={toggleModal}
          style={{...style.addNewTaskButton, ...ShadowStyle.Shadow}}>
          <MaterialIcon size={'extraLarge'} color={'#fff'} name={'plus'} />
        </Pressable>
      </View>
      <CustomModal
        isVisible={isModalVisible}
        onRequestClose={toggleModal}
        animationType={'slide'}>
        <CustomModal.Container>
          <CustomModal.Header title="Create New List" />
          <CustomModal.Body>
            <View>
              {/* <Label name="Title" />
              <InputControl
                value={title}
                placeholder={'Title'}
                onChangeText={(text: string) => setTitle(text)}
                maxlength={100}
              /> */}
              <Label name="Add a description" />
              <InputControl
                ref={inputRef}
                value={description}
                placeholder="Add a description"
                multiline={true}
                multilineHeight={120}
                numberOfLines={4}
                onChangeText={(text: string) => addNewDescriptionHandler(text)}
                maxlength={100}
              />
            </View>
          </CustomModal.Body>
          <CustomModal.Footer>
            <Pressable style={style.SaveButton} onPress={saveNewTaskHandler}>
              <Text style={style.saveButtonText}>{'Save'}</Text>
            </Pressable>
            <Pressable style={style.closeButton} onPress={toggleModal}>
              <Text style={style.saveButtonText}>{'Close'}</Text>
            </Pressable>
          </CustomModal.Footer>
        </CustomModal.Container>
      </CustomModal>
    </View>
  );
}

export default HomeScreen;
