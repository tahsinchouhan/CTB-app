import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

function GetStarted({navigation}) {
  return (
    <View className="bg-white h-full flex flex-col justify-between items-center relative">
      <Image
        source={require('../assets/images/getstarted.jpeg')}
        resizeMode="cover"
        className="w-full h-full  z-0"
      />
      <Pressable onPress={() => navigation.navigate('Loading')}>
        <View className=" bottom-32 shadow-md shadow-black  border-zinc-200 z-10 w-72 h-12 bg-primary rounded-xl flex justify-center items-center">
          <Text className="text-white text-2xl">Get Started</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GetStarted;
