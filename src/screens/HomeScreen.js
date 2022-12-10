import { gql } from '@apollo/client';
import React from 'react';
import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setTokenAndId } from '../redux/localSlice';

const GET_LOCATIONS = gql`
  query {
    users {
      name
      email
    }
  }
`;

const HomePage = ({ navigation }) => {
  const dispatch = useDispatch();
  // const { t, i18n } = useTranslation();
  // const { langPicked } = useSelector(
  //   ({ local }) => ({
  //     langPicked: true,
  //   }),
  //   shallowEqual,
  // );

  // const pickLang = lang => {
  //   i18n.changeLanguage(lang);
  //   dispatch(setLang(lang));
  // };

  // const { loading, error, data } = useQuery(GET_LOCATIONS);
  // console.log('data', data, error, loading);

  const upiURl =
    'upi://pay?pa=chouhan.rizwan@okhdfcbank&pn=RizwanChouhan&mc=0000&mode=02&purpose=00';

  const upiOpener = () => {
    Linking.openURL(upiURl).then(response => {
      console.log('response', response);
    });
  };

  return (
    <SafeAreaView className="h-full bg-white flex pt-20 justify-between">
      <View className="py-6 flex justify-between">
        <View className=" flex  items-center justify-center">
          <Text className="text-2xl font-semibold text-green-900 pb-1 ">
            CHHATTISGARH MUSLIM wowp
          </Text>
          <Text className="text-2xl font-semibold text-green-900 pb-1">
            TELI BIRADARI FOUNDATION
          </Text>
          <Text className="text-xl font-medium text-black ">
            HEALTH, EDUCATION, EMPLOYMENT
          </Text>
        </View>
        <Pressable
          className="flex justify-center items-center bg-[#00A859] h-11 rounded-2xl w-[80%] mx-auto mt-5"
          onPress={() => {
            dispatch(setTokenAndId({ token: null, userId: null }));
          }}>
          <Text>Logout</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            upiOpener();
            //navigation.navigate(PROFILE_SCREEN);
          }}>
          <View className="flex justify-center items-center bg-[#00A859] h-11 rounded-2xl w-[80%] mx-auto mt-5">
            <Text className="text-white  text-base font-bold font-sans">
              Donate
            </Text>
          </View>
        </Pressable>
      </View>

      <View className="flex justify-end ">
        <Image source={require('../assets/images/home.png')} className="" />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    height: '30%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});


// request UPI trnasaction from NPCI using ndoe js 
// Path: src/screens/HomeScreen.js

fetch('https://npci/pay', {')
