import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import GOOGLE_AUTH from '../apollo/mutations';
import LoginBGPNG from '../assets/images/login-bg.png';
import LOGO2 from '../assets/images/logo2.png';
import GoogleIcon from '../Components/SVG/GoogleIcon';
import { setTokenAndId } from '../redux/localSlice';
import Toast from '../Components/Toast';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [googleAuth, { loading }] = useMutation(GOOGLE_AUTH, {
    onCompleted: data => {
      console.log('data', data);
      const { token, payload } = data.googleAuth;
      dispatch(
        setTokenAndId({
          token,
          userId: payload?.email,
        }),
      );
      Toast.success({
        title: 'Login Success',
        message: 'Welcome to CMTBF',
      });
      // setTimeout(() => {
      //   // getProfile({
      //   //   email: payload?.email,
      //   // });
      //   navigation.navigate(HOME_TAB);
      // }, 700);
    },
    onError: _error => {
      Toast.error({
        title: 'Login Failed',
        message: _error.message,
      });
    },
  });

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const { idToken } = userInfo;
      googleAuth({
        variables: { idToken },
      });
    } catch (error) {
      Toast.error({
        title: error.code,
        message: 'Please try again',
      });
      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
  };

  return (
    <ImageBackground
      source={LoginBGPNG}
      resizeMode="cover"
      style={styles.image}>
      <View className="flex-1">
        <Image source={LOGO2} className="h-24 w-24 fixed top-10 left-5" />
        <View className="top-[41%] left-2">
          <Text className="text-green-600 text-base font-extrabold pb-1 ">
            Welcome To
          </Text>
          <Text className="font-black text-lg text-white leading-7 font-sans">
            CHHATTISGARH MUSLIM TELI BIRADARI FOUNDATION
          </Text>
        </View>
        <View className=" top-[51%] ml-3 mr-3">
          <Pressable
            onPress={signIn}
            className="flex flex-row justify-center items-center bg-[#00A859] h-12 rounded-xl mt-5">
            <GoogleIcon />
            <Text className="text-white  text-base font-bold font-sans ml-2">
              {loading ? 'Loading ...' : 'Google Sign In'}
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
