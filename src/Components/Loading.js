import React from 'react';
import { ActivityIndicator, Image, StatusBar, Text, View } from 'react-native';
import LOGO2 from '../assets/images/logo2.png';

const Loading = () => (
  <View className="flex flex-1 justify-center items-center bg-primary ">
    <StatusBar animated backgroundColor="#137760" barStyle="light-content" />
    <Image source={LOGO2} className="h-24 w-24" />
    <ActivityIndicator size="large" color="#00ff00" />
    <Text className="text-white">Loging In....</Text>
  </View>
);

export default Loading;
