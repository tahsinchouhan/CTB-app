import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {PROFILE_SCREEN} from '../utils/constant';

function LoadingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/login-bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <View className="flex" style={styles.ImageBackground}>
          <Image
            source={require('../assets/images/logo2.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.ContentBackground}>
          <Text className="text-green-600 text-base  font-extrabold pb-1">
            Welcome To
          </Text>
          <Text className="text-white font-black text-2xl leading-7">
            CHHATTISGARH MUSLIM TELI BIRADARI FOUNDATION
          </Text>
          <View className="pt-10 ">
            <TextInput
              placeholder="Email ID"
              placeholderTextColor="#fff"
              className="bg-transparent font-bold border border-white text-white rounded-xl  px-4 font-sans"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#fff"
              className="bg-transparent my-5 font-bold border border-white text-white rounded-xl px-4 font-sans"
            />
            <Pressable
              onPress={() => {
                navigation.navigate(PROFILE_SCREEN);
              }}>
              <View className="flex justify-center items-center bg-[#00A859] h-12 rounded-xl mt-5">
                <Text className="text-white  text-base font-bold font-sans">
                  Login Now
                </Text>
              </View>
            </Pressable>
            <Text className=" text-green-600 font-bold  p-4 font-sans text-sm">
              Don't Have an Account ?{' '}
              <Text className="text-white font-extrabold"> Register Now </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    paddingLeft: 30,
    paddingTop: 40,
    height: '40%',
  },
  ContentBackground: {
    padding: 30,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default LoadingScreen;
