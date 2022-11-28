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
import Svg, { Line, Rect, Text } from 'react-native-svg';

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
    <View className="flex flex-1 bg-slate-300 justify-center items-center">
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
                <Tree chidrens={[{}, {}, {}]} />
              </Animated.View>
            </ScrollView>
          </ScrollView>
        </GestureDetector>
      </GestureDetector>
    </View>
  );
}

export default FamilyTree;

function Tree({ chidrens }) {
  const LINE_COLOR = '#dfdfdf';
  const childrenCount = chidrens.length;
  const TOTAL_WIDTH = 100;
  const LINE_X1 = TOTAL_WIDTH / childrenCount / 2;
  const LINE_X2 = TOTAL_WIDTH - LINE_X1;
  const VERTICAL_SPACE = 40;

  const SQUARE = {
    width: VERTICAL_SPACE,
    height: VERTICAL_SPACE,
    r: VERTICAL_SPACE,
  };

  // const RIGHT_GAP_PERCENTAGE = 100 / childrenCount + LEFT_GAP_PERCENTAGE;
  // const MID_PERCENTAGE = 50;
  return (
    <View className="border flex justify-center items-center w-auto ">
      <Svg
        width={200}
        height={200}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect
          x={`${50 - SQUARE.width / 2}%`}
          width={SQUARE.width}
          height={SQUARE.height}
          rx={SQUARE.r}
          fill="#D9D9D9"
        />
        <Line
          x1="50%"
          y1={VERTICAL_SPACE}
          x2="50%"
          y2={VERTICAL_SPACE * 2}
          stroke={LINE_COLOR}
        />
        <Line
          x1={`${LINE_X1}%`}
          y1={VERTICAL_SPACE}
          x2={`${LINE_X2}%`}
          y2={VERTICAL_SPACE}
          stroke={LINE_COLOR}
        />
        {chidrens.map((child, index) => {
          let x1 = TOTAL_WIDTH / childrenCount / 2;
          const cofficient = TOTAL_WIDTH / childrenCount;
          x1 += cofficient * index;

          return (
            <>
              <Line
                x1={`${x1}%`}
                y1={VERTICAL_SPACE}
                x2={`${x1}%`}
                y2={VERTICAL_SPACE + 10}
                stroke={LINE_COLOR}
              />
              <Rect
                x={`${x1 - SQUARE.width / 2}%`}
                y={VERTICAL_SPACE * 2 + SQUARE.height / 3}
                width={SQUARE.width}
                height={SQUARE.height}
                rx={SQUARE.r}
                fill="#D9D9D9"
              />
              <Text x={`${x1}%`} y={VERTICAL_SPACE * 4} fontSize="" fill="#000">
                wows
              </Text>
            </>
          );
        })}
      </Svg>
    </View>
  );
}
