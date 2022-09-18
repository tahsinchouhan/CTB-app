import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <SafeAreaView className="bg-white">
      <View className="bg-white py-2 pb-4 flex">
        <Text className="font-bold text-gray-700 text-2xl mx-auto">
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
