import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Header from '../components/Header';
function DetailsPage({navigation}) {
  return (
    <SafeAreaView className="bg-white">
      <View className="bg-white h-screen box-border p-6">
        <Header title="Details" />
        <View className="h-full">
          <View className="w-full flex ">
            {/* <Image
              source={require('../assets/images/medical.png')}
              className="w-full"
            /> */}
            <View className="w-full h-40 bg-slate-400"></View>
            <Text className="text-xl font-bold ">
              Help The indonesian kigs for better education
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default DetailsPage;
