/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import React, { useRef } from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import FamilyNode from '../Components/FamilyNode';

function FamilyTree() {
  const { width, height } = useWindowDimensions();
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const pinchRef = useRef();

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

  return (
    <View className="flex flex-1 bg-[f4fdfb] justify-center items-center">
      <GestureDetector gesture={pinchGesture}>
        <GestureDetector gesture={nativeGesture}>
          <ScrollView waitFor={pinchRef}>
            <ScrollView horizontal waitFor={pinchRef}>
              <Animated.View
                style={[
                  {
                    width,
                    height,
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                  },
                  animatedStyle,
                ]}>
                <FamilyNode chidrens={[{ childrens: [{}, {}] }, {}, {}, {}]} />
              </Animated.View>
            </ScrollView>
          </ScrollView>
        </GestureDetector>
      </GestureDetector>
    </View>
  );
}

export default FamilyTree;
