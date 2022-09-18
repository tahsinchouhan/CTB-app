import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

function Loading({navigation}) {
  return (
    <SafeAreaView className="bg-white">
      <View className="bg-white h-full flex flex-col justify-between items-center">
        <View className="flex items-center h-full">
          <Image
            source={require('../assets/images/logo.png')}
            resizeMode="contain"
            className="w-64 h-64 mx-auto my-auto"
          />
        </View>
        <View>
          <Text className="text-gray-400">Developed by Chouhan Technology</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Loading;
