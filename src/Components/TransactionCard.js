import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

function TransactionCard({navigation}) {
  return (
    <SafeAreaView className=" rounded-xl my-3 border-b border-gray-200">
      <View className="flex flex-row justify-between h-16 ">
        <View className="flex flex-row items-center space-x-3">
          <View className="bg-white rounded-xl w-12 h-12 flex justify-center items-center"></View>
          <View className="flex">
            <Text className="text-black text-base font-bold ">
              CTB Foundation
            </Text>
            <Text className="text-[12px]">05 Aug 2021</Text>
          </View>
        </View>
        <View className="flex items-center justify-center">
          <Text className="text-action font-black">₹1000</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TransactionCard;
