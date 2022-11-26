import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const FamilyTree = () => {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      const chnage = savedScale.value * e.scale;
      console.log('chnage', chnage);
      if (chnage >= 1) {
        scale.value = chnage;
      }
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  console.log('render', animatedStyle);

  return (
    <View style={{flex: 1, borderWidth: 1, padding: 5}}>
      <GestureDetector gesture={pinchGesture}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text>fvbikj</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default FamilyTree;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'red',
  },
});
