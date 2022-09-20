import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import './lang/i18n';
import DetailsPage from './screens/DetailsPage';
import DonationScreen from './screens/DonationScreen';
import HomePage from './screens/HomePage';
import Intro from './screens/Intro';
import Loading from './screens/Loading';

const Stack = createNativeStackNavigator();

export const HOME_SCREEN = 'HOME_SCREEN';
export const DETAILS_SCREEN = 'DETAILS_SCREEN';
export const GET_STARTED_SCREEN = 'GET_STARTED_SCREEN';
export const LOADIN_SCREEN = 'LOADING_SCREEN';
export const DONATION_SCREEN = 'DONATION_SCREEN';

const Router = () => {
  const {intro} = useSelector(
    ({local}) => ({intro: local?.intro}),
    shallowEqual,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={intro ? GET_STARTED_SCREEN : HOME_SCREEN}>
        <Stack.Screen
          name={DETAILS_SCREEN}
          component={DetailsPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={GET_STARTED_SCREEN}
          component={Intro}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={LOADIN_SCREEN}
          component={Loading}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={DONATION_SCREEN}
          component={DonationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
