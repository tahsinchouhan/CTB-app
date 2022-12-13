/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import { useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo, useRef } from 'react';
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
  const scale = useSharedValue(0.5);
  const savedScale = useSharedValue(0.5);
  const pinchRef = useRef();
  const verticalScroll = useRef();
  const horizontalScroll = useRef();
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

  useEffect(() => {
    verticalScroll?.current?.scrollTo({
      y: Dimensions.get('window').height / 2,
      animated: true,
    });
    horizontalScroll?.current?.scrollTo({
      x: Dimensions.get('window').width / 2,
      animated: true,
    });
  }, [tree]);

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
      <GestureDetector gesture={pinchGesture}>
        <View
          className="flex flex-1 justify-center items-center overflow-hidden border-8 border-slate-200  "
          style={{
            backgroundColor: 'transparent',
            overflow: 'hidden',
            shadowColor: 'black',
            shadowRadius: 8,
            shadowOpacity: 0.7,
          }}>
          <GestureDetector gesture={nativeGesture}>
            <ScrollView
              waitFor={pinchRef}
              showsVerticalScrollIndicator={false}
              ref={verticalScroll}>
              <ScrollView
                horizontal
                waitFor={pinchRef}
                showsHorizontalScrollIndicator={false}
                ref={horizontalScroll}>
                <Animated.View
                  style={[
                    {
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                      minHeight: Dimensions.get('window').height * 2,
                      minWidth: Dimensions.get('window').width * 2,
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
        </View>
      </GestureDetector>
    </FamilyTreeContext.Provider>
  );
};

export default FamilyTree;
