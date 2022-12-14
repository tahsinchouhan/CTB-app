import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import DetailsPage from './screens/DetailsPage';
import DonationScreen from './screens/DonationScreen';
import FamilyTree from './screens/FamilyTree';
import HomePage from './screens/HomeScreen';
import Intro from './screens/Intro';
import PaymentScreen from './screens/PaymentScreen';
import PaymentSucessScreen from './screens/PaymentSucessScreen';
import ProfileScreen from './screens/ProfileScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import {
  CONTACT_SCREEN,
  DETAILS_SCREEN,
  DONATION_SCREEN,
  FAMILY_SCREEN,
  FAMILY_TREE_SCREEN,
  GET_ALL_PERMISSONS,
  GET_STARTED_SCREEN,
  HOME_SCREEN,
  HOME_TAB,
  LOGIN_SCREEN,
  PAYMENT_SCREEN,
  PAYMENT_SUCESS_SCREEN,
  PERMISSION_SCREEN,
  PROFILE_SCREEN,
  TRANSACTIONS_SCREEN,
} from './utils/constant';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import FamilyScreen from './screens/FamilyScreen';
import PermissionScreen from './screens/PermissionScreen';
import { useQuery } from '@tanstack/react-query';
import GlobalController from './utils/GlobalController';
import Loading from './Components/Loading';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const navigationRef = createNavigationContainerRef();

const Routes = () => {
  const { token } = useSelector(
    ({ local }) => ({ token: local?.token }),
    shallowEqual,
  );

  const { data, state } = useQuery(
    [GET_ALL_PERMISSONS],
    GlobalController.requestCameraPermission,
  );

  const permissions = data || [];

  useEffect(() => {
    if (token === undefined || token === null) {
      if (navigationRef.isReady()) {
        navigationRef.navigate(LOGIN_SCREEN);
      }
    } else {
      const isPermissionGranted = permissions.every(
        permission => permission.status === 'granted',
      );
      if (!isPermissionGranted) {
        if (navigationRef.isReady()) {
          navigationRef.navigate(PERMISSION_SCREEN);
        }
      }
    }
  }, [token, permissions]);

  if (state === 'loading') {
    return <Loading />;
  }

  const getinitialRouteName = () => {
    if (token) {
      const isPermissionGranted = permissions.every(
        permission => permission.status === 'granted',
      );
      if (isPermissionGranted) {
        return HOME_TAB;
      }
      return PERMISSION_SCREEN;
    }
    return LOGIN_SCREEN;
  };
  console.log('getinitialRouteName', getinitialRouteName());

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={getinitialRouteName()}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name={PERMISSION_SCREEN} component={PermissionScreen} />
        <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={DETAILS_SCREEN} component={DetailsPage} />
        <Stack.Screen name={HOME_TAB} component={BottomTabs} />
        <Stack.Screen name={GET_STARTED_SCREEN} component={Intro} />
        <Stack.Screen name={DONATION_SCREEN} component={DonationScreen} />
        <Stack.Screen name={PAYMENT_SCREEN} component={PaymentScreen} />
        <Stack.Screen name={FAMILY_TREE_SCREEN} component={FamilyTree} />
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

const BottomTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name={HOME_SCREEN}
      options={{
        title: 'Home',
        headerShown: false,
      }}
      component={HomePage}
    />
    <Tab.Screen
      name={FAMILY_SCREEN}
      options={{
        title: 'Family',
        headerShown: false,
      }}
      component={FamilyScreen}
    />
    <Tab.Screen
      name={PROFILE_SCREEN}
      options={{
        title: 'Profile',
        headerShown: false,
      }}
      component={ProfileScreen}
    />
    <Tab.Screen
      name={CONTACT_SCREEN}
      options={{
        title: 'Contact',
        headerShown: false,
      }}
      component={ContactScreen}
    />
  </Tab.Navigator>
);
