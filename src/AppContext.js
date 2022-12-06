/* eslint-disable react/jsx-no-constructed-context-values */
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { ActivityIndicator, Image, StatusBar, Text, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import GET_PROFILE from './apollo/quaries';
import LOGO2 from './assets/images/logo2.png';
import { setTokenAndId } from './redux/localSlice';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { token, userId } = useSelector(
    ({ local }) => ({ token: local?.token, userId: local?.userId }),
    shallowEqual,
  );

  const { data, loading, refetch } = useQuery(GET_PROFILE, {
    skip: !userId && !token,
    variables: {
      where: {
        email: userId,
      },
    },
    onError: error => {
      console.log('error', error.message);
      if (error?.message.includes('Unauthenticated')) {
        dispatch(setTokenAndId({ token: null, userId: null }));
      }
    },
  });
  const user = data?.users?.length > 0 ? data?.users[0] : null;
  console.log('user', userId);

  const value = useMemo(() => ({ user, getProfile: refetch, userId }), [data]);

  if (loading) {
    return (
      <View className="flex flex-1 justify-center items-center bg-primary ">
        <StatusBar
          animated
          backgroundColor="#137760"
          barStyle="light-content"
        />
        <Image source={LOGO2} className="h-24 w-24" />
        <ActivityIndicator size="large" color="#00ff00" />
        <Text className="text-white">Loging In....</Text>
      </View>
    );
  }

  return (
    <AppContext.Provider value={value}>
      <StatusBar animated backgroundColor="#00A859" barStyle="light-content" />
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
