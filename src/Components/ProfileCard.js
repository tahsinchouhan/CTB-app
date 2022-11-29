import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {ArrowSVG, PenSVG} from '../assets/svg/SVG';

function ProfileCard({navigation}) {
  return (
    <SafeAreaView className="bg-white rounded-xl my-3 border border-gray-200">
      <View className="flex flex-row justify-between h-14 px-5 ">
        <View className="flex flex-row items-center space-x-5">
          <View className="bg-gray-400 rounded-full w-10 h-10 flex justify-center items-center">
            <PenSVG />
          </View>
          <View className="flex items-center">
            <Text className="text-black text-sm font-medium ">
              Card Name Here
            </Text>
          </View>
        </View>
        <View className="flex items-center justify-center">
          <ArrowSVG />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfileCard;
