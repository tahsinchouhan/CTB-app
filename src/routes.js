import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import DetailsPage from './screens/DetailsPage';
import DonationScreen from './screens/DonationScreen';
import FamilyTree from './screens/FamilyTree';
import HomePage from './screens/HomeScreen';
import Intro from './screens/Intro';
import Loading from './screens/Loading';
import LoadingScreen from './screens/LoginScreen';
import PaymentScreen from './screens/PaymentScreen';
import PaymentSucessScreen from './screens/PaymentSucessScreen';
import ProfileScreen from './screens/ProfileScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import {
  DETAILS_SCREEN,
  DONATION_SCREEN,
  FAMILY_TREE_SCREEN,
  GET_STARTED_SCREEN,
  HOME_SCREEN,
  LOADIN_SCREEN,
  LOGIN_SCREEN,
  PAYMENT_SCREEN,
  PAYMENT_SUCESS_SCREEN,
  PROFILE_SCREEN,
  TRANSACTIONS_SCREEN,
} from './utils/constant';

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

const Routes = () => {
  const { token } = useSelector(
    ({ local }) => ({ token: local?.token }),
    shallowEqual,
  );

  useEffect(() => {
    if (token === undefined || token === null) {
      console.log('token', token);
      console.log('navigationRef.isReady()', navigationRef.isReady());
      if (navigationRef.isReady()) {
        navigationRef.navigate(LOGIN_SCREEN);
      }
    }
  }, [token]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={token ? HOME_SCREEN : LOGIN_SCREEN}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={LOGIN_SCREEN} component={LoadingScreen} />
        <Stack.Screen name={DETAILS_SCREEN} component={DetailsPage} />
        <Stack.Screen name={HOME_SCREEN} component={HomePage} />
        <Stack.Screen name={GET_STARTED_SCREEN} component={Intro} />
        <Stack.Screen name={LOADIN_SCREEN} component={Loading} />
        <Stack.Screen name={DONATION_SCREEN} component={DonationScreen} />
        <Stack.Screen name={FAMILY_TREE_SCREEN} component={FamilyTree} />
        <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
        <Stack.Screen name={PAYMENT_SCREEN} component={PaymentScreen} />
        <Stack.Screen
          name={PAYMENT_SUCESS_SCREEN}
          component={PaymentSucessScreen}
        />

        <Stack.Screen
          name={TRANSACTIONS_SCREEN}
          component={TransactionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
