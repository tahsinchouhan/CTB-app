import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AppContext } from '../../AppContext';
import NodeModal from '../FamilyTree/NodeModal';

const NodeAvatar = ({ node }) => {
  const { name, gender, _id } = node;
  const [modalVisible, setModalVisible] = useState(false);
  const { userId } = React.useContext(AppContext);
  const isNodeOwner = userId === _id;

  const getRightNode = () => {
    if (isNodeOwner) {
      return (
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <LinearGradient
            colors={['#3c0ba9', '#930fa8']}
            className="flex w-20 h-20 rounded-full justify-center items-center font-semibold m-2">
            <Text className="text-white font-semibold text-3xl uppercase">
              {name[0]}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    }

    if (gender === 'male') {
      return (
        <TouchableOpacity>
          <LinearGradient
            colors={['#0a66c2', '#0a66c2']}
            className="flex w-20 h-20 rounded-full justify-center items-center font-semibold m-2">
            <Text className="text-white font-semibold text-3xl uppercase">
              {name[0]}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    }

    if (gender === 'female') {
      return (
        <TouchableOpacity>
          <LinearGradient
            colors={['#f76258', '#f75561', '#f52877']}
            className="flex w-20 h-20 rounded-full justify-center items-center font-semibold m-2 ">
            <Text className="text-white font-semibold text-3xl uppercase">
              {name[0]}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity>
        <View className="flex w-20 h-20 rounded-full bg-orange-400 justify-center items-center font-semibold m-2">
          <Text>{name[0]}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex justify-center items-center">
      {getRightNode()}
      <Text className="text-black text-sm font-normal mb-2">{name}</Text>
      <NodeModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        node={node}
      />
    </View>
  );
};

export default NodeAvatar;

// Path: src/Components/Node.js
NodeAvatar.propTypes = {
  node: PropTypes.object,
};

NodeAvatar.defaultProps = {
  node: {
    _id: 'default',
    name: 'default',
    gender: 'male',
    childrens: [],
  },
};
