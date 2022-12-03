import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

function PaymentScreen({navigation}) {
  return (
    <SafeAreaView className="bg-[#F9F9F9]">
      <View className="h-screen p-5">
        <Text className="text-xl font-bold font-sans text-black">
          Donate Now
        </Text>
        <View className="mt-10">
          <View className="bg-primary w-14 h-14 rounded-full mx-auto flex justify-center items-center">
            <Text className="text-white text-xl font-semibold">T</Text>
          </View>
          <Text className="text-lg text-center py-1 text-black">
            Donating to CTB Foundation
          </Text>
          <Text className="text-center leading-[14px]">
            <Text className="font-semibold ">+91 1234567890</Text>
          </Text>
          <Text className="text-center leading-4 ">
            Banking Name: <Text className="font-bold">CTB Foundation</Text>
          </Text>

          <View>
            <TextInput
              autoFocus
              className=" mx-auto w-32 border-b text-4xl text-center font-semibold"
              placeholder="₹ 0"
            />
            <TextInput
              className=" w-32 bg-gray-200 text-sm rounded-xl my-4 mx-auto text-center font-semibold"
              placeholder="Add a note"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PaymentScreen;
