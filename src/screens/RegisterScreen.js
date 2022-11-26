import React from 'react';
import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {REGISTER_SCREEN} from '../utils/constant';

function Register({navigation}) {
  return (
    <SafeAreaView className="bg-primary">
      <View className="bg-primary h-full flex flex-col  px-6">
        <View className="flex">
          <Text className="text-white text-3xl font-bold pt-4 pb-1">
            Register
          </Text>
          <Text className="text-white">
            Create an account to access all the features of CTB Foundation
          </Text>
        </View>
        <View className="pt-10 space-y-6">
          <View>
            <Text className="text-white text-lg">Your Name</Text>
            <TextInput
              className="px-4 py-4 bg-white rounded-2xl mt-2"
              placeholder="Ex. Mohammad Jafar"
            />
          </View>
          <View>
            <Text className="text-white text-lg">Mobile Number</Text>
            <TextInput
              className="px-4 py-4 bg-white rounded-2xl mt-2"
              placeholder="Ex. 1234567890"
              keyboardType="numeric"
            />
          </View>
          <View>
            <Text className="text-white text-lg">Location</Text>
            <TextInput
              className="px-4 py-4 bg-white rounded-2xl mt-2"
              placeholder="Ex. Raipur"
            />
          </View>
          <View>
            <Text className="text-white text-lg">Goutra</Text>
            <TextInput
              className="px-4 py-4 bg-white rounded-2xl mt-2"
              placeholder="Ex. Chouhan"
            />
          </View>
          {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
            <Text>Sign in with Facebook</Text>
          </LinearGradient> */}
          <Pressable
            onPress={() => {
              navigation.navigate(REGISTER_SCREEN);
            }}>
            <View className="bg-primary w-[300px] h-[60px] flex justify-center rounded-2xl">
              <Text className="text-white text-xl text-center">
                Get Started
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register;
