/* eslint-disable react/jsx-no-constructed-context-values */
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import GET_PROFILE from './apollo/quaries';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { token, userId } = useSelector(
    ({ local }) => ({ token: local?.token, userId: local?.userId }),
    shallowEqual,
  );

  const { loading } = useQuery(GET_PROFILE, {
    skip: !token && !userId,
    variables: {
      where: {
        email: userId,
      },
    },
    onError: error => {
      console.log('error', error);
    },
    onCompleted: data => {
      console.log('data', data);
    },
  });

  const value = useMemo(() => ({ user }), [user, setUser]);

  if (loading) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#00ff00" />
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
