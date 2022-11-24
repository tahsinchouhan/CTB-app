import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import './lang/i18n';
import DetailsPage from './screens/DetailsPage';
import DonationScreen from './screens/DonationScreen';
import HomePage from './screens/HomeScreen';
import Intro from './screens/Intro';
import Loading from './screens/Loading';
import {
  DETAILS_SCREEN,
  DONATION_SCREEN,
  GET_STARTED_SCREEN,
  HOME_SCREEN,
  LOADIN_SCREEN,
} from './utils/constant';

const Stack = createNativeStackNavigator();

export default function Router() {
  const {intro} = useSelector(
    ({local}) => ({intro: local?.intro}),
    shallowEqual,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={intro ? GET_STARTED_SCREEN : HOME_SCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={DETAILS_SCREEN} component={DetailsPage} />
        <Stack.Screen name={HOME_SCREEN} component={HomePage} />
        <Stack.Screen name={GET_STARTED_SCREEN} component={Intro} />
        <Stack.Screen name={LOADIN_SCREEN} component={Loading} />
        <Stack.Screen name={DONATION_SCREEN} component={DonationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
