import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import CTBHeadline from '../components/core/CTBHeadline';
import CTBText from '../components/core/Text';
import {setLang} from '../redux/localSlice';

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

  // const {
  //   data = [],
  //   isLoading,
  //   error,
  // } = useQuery([DONATIONS_QUERY], DonationDB.getDonations);

  const {loading, error, data} = useQuery(GET_LOCATIONS);
  console.log('data', data, error, loading);

  return (
    <>
      <SafeAreaView className="bg-white">
        <View className="bg-white h-screen items-center box-border">
          {/* Logo --------------------- */}
          <View className="p-1 object-contain h-28 w-32 items-center">
            <Image
              className="w-full h-full"
              source={require('../assets/images/home-bg1.png')}
            />
          </View>
          {/* CTB Head Line ------------- */}
          <CTBHeadline />
          <View className="w-full px-4 py-2 ">
            <View className="bg-secondary rounded-[20px] w-full  py-4 items-center">
              <CTBText className="text-2xl py-2 pb-4 font-semibold text-center bg-secondary  text-white">
                एक कदम {'\n'} कामयाबी की ओर...
              </CTBText>
              <Pressable>
                <Text className="bg-white text-secondary px-4 py-1 font-bold text-lg rounded-full">
                  Donate
                </Text>
              </Pressable>
            </View>
          </View>
          <View className="flex flex-row justify-center items-center mt-4">
            <Image source={require('../assets/images/home-bg2.png')} />
          </View>
        </View>
      </SafeAreaView>
      {/* <SafeAreaView className="bg-white">
        <View className="bg-white h-screen box-border">
          <Header title="Home" />
          <View className="h-full">
            <View className="py-2 px-8 mx-4 bg-secondary h-28 rounded-2xl flex flex-row justify-between items-center ">
              <CTBText className="text-white font-bold text-lg w-[50%]">
                Start new Fundraising
              </CTBText>
              <Pressable
                onPress={() => {
                  navigation.push('Home');
                }}
                className="w-full">
                <View className="p-1 w-[45%] py-6 flex bg-white m-4 rounded-2xl">
                  <CTBText className=" text-md font-normal text-black text-center">
                    Start Now
                  </CTBText>
                </View>
              </Pressable>
            </View>

            <View className=" py-6 flex justify-center flex-row ">
              <MiniCard
                src={require('../assets/images/medical.png')}
                cardTitle={t('Health')}
              />
              <MiniCard
                src={require('../assets/images/education.png')}
                cardTitle="Education"
              />
              <MiniCard
                src={require('../assets/images/disaster.png')}
                cardTitle="Disaster"
              />
              <MiniCard
                src={require('../assets/images/others.png')}
                cardTitle="Other"
              />
            </View>

            <View className="px-2">
              <CTBText className="text-2xl">Donation Statistics</CTBText>
              <Graph />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={!langPicked}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CTBText style={styles.modalText}>{t('chooseLang')}</CTBText>
            <Pressable
              className="bg-blue-500 px-5 py-2 rounded-md m-1"
              onPress={() => pickLang('hi')}>
              <CTBText style={styles.textStyle}>Hindi</CTBText>
            </Pressable>
            <Pressable
              className="bg-blue-500 px-5 py-2 rounded-md m-1"
              onPress={() => pickLang('en')}>
              <CTBText style={styles.textStyle}>English</CTBText>
            </Pressable>
          </View>
        </View>
      </Modal> */}
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
