import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import LinearGradient from 'react-native-linear-gradient';
import AddNodeFrom from './AddNodeFrom';

const NodeModal = ({ modalVisible, setModalVisible, node }) => {
  const { name, childrens = [] } = node;
  const actionSheetRef = useRef(null);
  return (
    <Modal animationType="fade" transparent animated visible={modalVisible}>
      <View className="bg-transparent flex flex-1 justify-center items-center ">
        <LinearGradient
          colors={['#3c0ba9', '#930fa8']}
          className="bg-white w-10/12 h-1/2 flex  p-2 rounded-3xl relative overflow-scroll">
          <View className="flex flex-row justify-center items-center mt-5">
            <Text className="text-lg font-bold text-white">{name}</Text>
          </View>
          <ScrollView>
            <View className="mt-3">
              {childrens.map(child => (
                <View
                  key={child._id}
                  className="flex flex-row justify-between px-2 py-2 items-center">
                  <Text className="text-base font-medium text-white">
                    {child.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    className="bg-red-400 px-3 py-1 rounded-lg">
                    <Text className="text-black font-medium text-xs">
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className="absolute top-3 right-5 px-3">
            <Text className="text-white font-extrabold text-lg">X</Text>
          </TouchableOpacity>
          <View className="flex justify-center items-center">
            <TouchableOpacity
              onPress={() => actionSheetRef.current?.show()}
              className="h-11 w-44 rounded-lg flex justify-center items-center bg-primary">
              <Text className="text-white font-extrabold text-sm">
                Add Child
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <ActionSheet
          ref={actionSheetRef}
          isModal
          containerStyle={{ height: '70%' }}>
          <View className="flex flex-1 relative">
            <ScrollView>
              <View className="flex flex-1 mt-10 p-4">
                <AddNodeFrom />
              </View>
            </ScrollView>
            <TouchableOpacity
              onPress={() => actionSheetRef.current?.hide()}
              className="absolute top-3 right-3 px-3">
              <Text className="text-black font-extrabold text-lg">X</Text>
            </TouchableOpacity>
          </View>
        </ActionSheet>
      </View>
    </Modal>
  );
};

export default NodeModal;

NodeModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  node: PropTypes.object.isRequired,
};
