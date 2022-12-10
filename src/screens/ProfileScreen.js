import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { PenSVG } from '../assets/svg/SVG';
import ProfileCard from '../Components/ProfileCard';
import { setToken } from '../redux/localSlice';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="bg-[#F9F9F9]">
      <View className="h-screen p-5">
        <Text className="text-xl font-bold font-sans text-black">Profile</Text>
        <View className="h-[90px] p-3 my-4 bg-primary flex flex-row justify-between items-center rounded-md">
          <View className="flex flex-row">
            <Image
              source={require('../assets/images/logo2.png')}
              className="rounded-full w-16 h-16"
            />
            <View className="pl-2 flex justify-center">
              <Text className="text-white text-sm font-bold ">
                Tahsin Chouham
              </Text>
              <Text className="text-[12px] text-[#D7D7D7]">
                Tahsinchouhan2000@gmail.com
              </Text>
            </View>
          </View>
          <View className="">
            <PenSVG />
          </View>
        </View>
        <Pressable
          onPress={() => {
            dispatch(setToken(null));
          }}>
          <Text>Logout</Text>
        </Pressable>
        <View className="mt-10">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
