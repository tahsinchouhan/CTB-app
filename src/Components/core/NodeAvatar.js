import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const NodeAvatar = ({ name, addChilds }) => (
  <TouchableOpacity onPress={addChilds}>
    <View className="flex w-20 h-20 rounded-full bg-orange-400 justify-center items-center font-semibold m-2">
      <Text>{name}</Text>
    </View>
  </TouchableOpacity>
);

export default NodeAvatar;

// Path: src/Components/Node.js
NodeAvatar.propTypes = {
  name: PropTypes.string,
  addChilds: PropTypes.func,
};

NodeAvatar.defaultProps = {
  name: 'default',
  addChilds: () => {},
};
