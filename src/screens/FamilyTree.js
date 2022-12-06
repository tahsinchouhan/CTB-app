/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import { useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import React, { useMemo, useRef } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { GET_FAMILY_TREE } from '../apollo/quaries';
import FamilyTreeContext from '../Components/FamilyTree/FamilyTreeContext';
import Node from '../Components/FamilyTree/Node';

const FamilyTree = () => {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const pinchRef = useRef();
  const { params } = useRoute();
  const { familyId } = params;

  const pinchGesture = Gesture.Pinch()
    .withRef(pinchRef)
    .onUpdate(e => {
      const chnage = savedScale.value * e.scale;
      scale.value = chnage;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const nativeGesture =
    Gesture.Native().requireExternalGestureToFail(pinchGesture);

  const { data, loading, error } = useQuery(GET_FAMILY_TREE, {
    variables: {
      where: {
        email: familyId,
      },
    },
  });

  const tree = data?.users?.length > 0 ? data?.users[0] : null;

  const value = useMemo(() => ({ nodes: tree }), [tree]);

  if (loading) {
    return (
      <View className="flex flex-1 justify-center items-center ">
        <ActivityIndicator size="large" color="#00ff00" />
        <Text className="text-white">Loging In....</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex flex-1 justify-center items-center font-sans">
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <FamilyTreeContext.Provider value={value}>
      <View className="flex flex-1 bg-[f4fdfb] justify-center items-center">
        <GestureDetector gesture={pinchGesture}>
          <GestureDetector gesture={nativeGesture}>
            <ScrollView waitFor={pinchRef}>
              <ScrollView horizontal waitFor={pinchRef}>
                <Animated.View
                  style={[
                    {
                      flex: 1,
                      width: '100%',
                      height: '100%',
                      minHeight: Dimensions.get('window').height * 2,
                      minWidth: Dimensions.get('window').width * 2,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      // borderWidth: 1,
                      overflow: 'scroll',
                    },
                    animatedStyle,
                  ]}>
                  {data.users.length > 0 && (
                    <Node top node={data.users[0]} level={1} number={1} />
                  )}
                </Animated.View>
              </ScrollView>
            </ScrollView>
          </GestureDetector>
        </GestureDetector>
      </View>
    </FamilyTreeContext.Provider>
  );
};

export default FamilyTree;
