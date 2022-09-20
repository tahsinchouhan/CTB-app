import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {DONATION_SCREEN} from '../routes';
import CTBText from './core/Text';

const MiniCard = ({cardTitle, src}) => {
  const navigate = useNavigation();

  return (
    <Pressable onPress={() => navigate.push(DONATION_SCREEN)}>
      <View className="w-[75px] ">
        <View className="bg-[#F5F9FE] h-16 w-16 rounded-2xl p-3 mb-2 mx-auto">
          <Image source={src} className="w-full h-full" />
        </View>
        <CTBText className="font-medium text-sm text-center font-pop">
          {cardTitle}
        </CTBText>
      </View>
    </Pressable>
  );
};

export default MiniCard;
