import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
// import CTBHeadline from '../components/core/CTBHeadline';
// import CTBText from '../components/core/Text';
import {setLang} from '../redux/localSlice';
import {FAMILY_TREE_SCREEN} from '../utils/constant';

const GET_LOCATIONS = gql`
  query {
    users {
      name
      email
    }
  }
`;

function HomePage({navigation}) {
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const {langPicked} = useSelector(
    ({local}) => ({
      langPicked: true,
    }),
    shallowEqual,
  );

  const pickLang = lang => {
    i18n.changeLanguage(lang);
    dispatch(setLang(lang));
  };

  const {loading, error, data} = useQuery(GET_LOCATIONS);
  console.log('data', data, error, loading);

  return (
    <>
      <SafeAreaView className=" h-screen bg-green-900 flex items-center justify-evenly">
        <View className=" flex items-center justify-center">
          <Text className="text-2xl font-bold text-white pb-1 ">
            CHHATTISGARH MUSLIM
          </Text>
          <Text className="text-2xl font-bold text-white pb-1">
            TELI BIRADARI FOUNDATION
          </Text>
          <Text className="text-xl font-medium text-white ">
            HEALTH, EDUCATION, EMPLOYMENT
          </Text>
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate(FAMILY_TREE_SCREEN);
          }}>
          <View className="bg-primary w-[300px] h-[60px] flex justify-center rounded-2xl">
            <Text className="text-white text-xl text-center">Get Started</Text>
          </View>
        </Pressable>
      </SafeAreaView>
    </>
  );
}

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
