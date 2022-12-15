import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setTokenAndId } from '../redux/localSlice';
import {
  GET_CONTACTS,
  START_SYNC_CONTACTS,
  START_SYNC_LOCAL_CONTACTS,
} from '../utils/constant';
import ContactsApi from '../utils/ContactDB';

// const GET_LOCATIONS = gql`
//   query {
//     users {
//       name
//       email
//     }
//   }
// `;

const HomePage = () => {
  const dispatch = useDispatch();

  useQuery([START_SYNC_LOCAL_CONTACTS], ContactsApi.syncContactsLocal);
  const { data: contactData } = useQuery(
    [GET_CONTACTS],
    ContactsApi.getContacts,
  );
  const { refetch } = useQuery(
    [START_SYNC_CONTACTS],
    ContactsApi.startSyncContacts,
  );
  console.log('data', contactData?.length);

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
            refetch();
            // mutate({
            //   name: 'Rizwan',
            //   email: 'choouhan.rizwan@gmail.com',
            //   number: '9827866360',
            // });
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
