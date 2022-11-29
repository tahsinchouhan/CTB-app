/* eslint-disable global-require */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch } from 'react-redux';
import { setIntro } from '../redux/localSlice';
import { HOME_SCREEN } from '../utils/constant';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../assets/images/getstarted.jpeg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../assets/images/getstarted.jpeg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../assets/images/getstarted.jpeg'),
    backgroundColor: '#22bcb5',
  },
];

function Intro() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const _renderItem = useCallback(
    ({ item }) => (
      <View className="flex flex-1">
        <Image source={item.image} />
      </View>
    ),
    [],
  );

  const _onDone = useCallback(() => {
    dispatch(setIntro(false));
    navigation.push(HOME_SCREEN);
    // props.navigation.navigate('Loading');
  }, []);

  return (
    <AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
  );
}

export default Intro;
