/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import React, { useMemo, useRef } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import FamilyTreeContext from '../Components/FamilyTree/FamilyTreeContext';
import Node from '../Components/FamilyTree/Node';

const NODE = {
  _id: '1',
  name: 'Rashid',
  gender: 'male',
  childrens: [
    {
      _id: '11',
      name: 'Irfan',
      gender: 'male',
    },
    {
      _id: '12',
      name: 'Nagma',
      gender: 'female',
      childrens: [
        {
          _id: '121',
          name: 'Raza',
          gender: 'male',
          childrens: [
            {
              _id: '1211',
              name: 'Raza',
              gender: 'male',
            },
            {
              _id: '1212',
              name: 'Raza',
              gender: 'male',
            },
          ],
        },
        {
          _id: '122',
          name: 'Umair',
          gender: 'male',
          childrens: [],
        },
        {
          _id: '123',
          name: 'Ayesha',
          gender: 'female',
          childrens: [],
        },
      ],
    },
    {
      _id: '13',
      name: 'Nafisa',
      gender: 'female',
      childrens: [
        {
          _id: '131',
          name: 'Alina',
          gender: 'female',
          childrens: [],
        },
        {
          _id: '132',
          name: 'aliza',
          gender: 'female',
          childrens: [],
        },
        {
          _id: '133',
          name: 'Ayesha',
          gender: 'female',
          childrens: [],
        },
        {
          _id: '134',
          name: 'Ayesha',
          gender: 'female',
          childrens: [],
        },
        {
          _id: '135',
          name: 'Ayesha',
          gender: 'female',
          childrens: [],
        },
        {
          _id: '136',
          name: 'Ayesha',
          childrens: [],
          gender: 'female',
        },
        {
          _id: '137',
          name: 'Ayesha',
          gender: 'female',
          childrens: [],
        },
      ],
    },
    {
      _id: '14',
      name: 'Rizwan',
      gender: 'male',
      childrens: [
        {
          _id: '141',
          name: 'Ayesha',
          childrens: [],
          gender: 'female',
        },
        {
          _id: '142',
          name: 'filza',
          childrens: [],
          gender: 'female',
        },
      ],
    },
  ],
};

// let totalNodes = 0;
// const countChidlrens = arr => {
//   totalNodes += arr.length;
//   arr.forEach(item => {
//     const itemChildrens = item.childrens || [];
//     if (itemChildrens.length > 0) {
//       countChidlrens(item.childrens);
//     }
//   });
//   return totalNodes;
// };

// const getTotalChildrens = arr => {
//   const totalodes = countChidlrens(arr);
//   global.totalNodes = totalodes;
// };

const FamilyTree = () => {
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

  const addChildrens = (_childrens, level, number) => {
    const levelArray = new Array(level).fill(level);
    // pick NODEs nested chilren of level
    console.log('levelArray', levelArray, number);
  };

  const nativeGesture =
    Gesture.Native().requireExternalGestureToFail(pinchGesture);
  // getTotalChildrens(NODE.childrens);
  const value = useMemo(
    () => ({ nodes: NODE, addChildrens }),
    [NODE, addChildrens],
  );

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
                  <Node top node={NODE} level={1} number={1} />
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

// <FamilyNode
//   node={{
//     name: 'Rashid',
//     childrens: [
//       { name: 'Nagma' },
//       { name: 'Nafisa' },
//       { name: 'Irfan' },
//     ],
//   }}
// />
