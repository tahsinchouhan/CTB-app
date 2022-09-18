import React from 'react';
import {Image, Text, View} from 'react-native';

const MiniCard = ({cardTitle, src}) => {
  return (
    <View className="w-[75px] ">
      <View className="bg-[#F5F9FE] h-16 w-16 rounded-2xl p-3 mb-2 mx-auto">
        <Image source={src} className="w-full h-full" />
      </View>
      <Text className="font-medium text-sm text-center">{cardTitle}</Text>
    </View>
  );
};

export default MiniCard;
