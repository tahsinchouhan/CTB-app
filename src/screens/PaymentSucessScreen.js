import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {HOME_SCREEN} from '../utils/constant';

function PaymentSucessScreen({navigation}) {
  return (
    <SafeAreaView className="bg-white rounded-t-2xl">
      <View className="h-screen flex justify-center items-center">
        <View className="bg-action h-28 w-28 rounded-full mb-4"></View>
        <Text className="text-primary text-5xl text-center  pb-4 font-bold ">
          Payment Successful
        </Text>
        <Text className="text-primary text-xl">
          Thank You for your donation
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate(HOME_SCREEN);
          }}>
          <View className="flex w-36 justify-center items-center bg-[#00A859] h-12 rounded-xl mt-5">
            <Text className="text-white  text-base font-bold font-sans">
              Home
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default PaymentSucessScreen;
