import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef } from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  View,
  Linking,
  AppState,
} from 'react-native';
import { GET_ALL_PERMISSONS, HOME_TAB } from '../utils/constant';
import GlobalController from '../utils/GlobalController';

const PermissionScreen = () => {
  const appState = useRef(AppState.currentState);
  const navigation = useNavigation();
  const { data, error, refetch } = useQuery(
    [GET_ALL_PERMISSONS],
    GlobalController.requestCameraPermission,
  );

  const permissions = data || [];

  const Allow = async () => {
    await refetch();
    const isPermissionGranted = permissions.every(
      permission => permission.status === 'granted',
    );
    if (!isPermissionGranted) {
      Linking.openSettings();
    } else {
      navigation.navigate(HOME_TAB);
    }
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // console.log('App has come to the foreground!');
        refetch();
      }

      appState.current = nextAppState;
      //   console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  if (error) {
    return (
      <View className="flex flex-1">
        <Text>Error Permission required </Text>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView className="bg-primary flex flex-1">
      <View className="flex flex-1 p-2 pl-3 pr-3 bg-primary">
        <View className="justify-center items-center mb-10 mt-10">
          <Text className="text-white text-2xl font-sans">
            Permissions required
          </Text>
        </View>
        {permissions.map(permission => (
          <View key={permission.title} className="flex  mt-10 mb-2">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg text-white">{permission.title}</Text>
              <Text className="text-white mt-2 text-xs">
                {permission.status}
              </Text>
            </View>
            <View className="">
              <Text className="mt-2 text-xs text-white">
                {permission.message}
              </Text>
            </View>
          </View>
        ))}
        <View className="mt-10">
          <Pressable
            onPress={Allow}
            className="flex flex-row justify-center items-center bg-[#00A859] h-12 rounded-xl mt-5">
            <Text className="text-white  text-base font-bold font-sans ml-2">
              Allow
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default PermissionScreen;
