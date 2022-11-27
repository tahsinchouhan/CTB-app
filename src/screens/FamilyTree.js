import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from 'react-native-gesture-handler';
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
      scale.value = chnage;
      if (chnage >= 1) {
      }
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  console.log('render', animatedStyle);

  return (
    <GestureDetector gesture={pinchGesture}>
      <View className="flex flex-1 bg-slate-300 p-10">
        <View className="flex flex-1 bg-white overflow-hidden border border-blue-600 p-10">
          <ScrollView
            contentContainerStyle={{
              borderWidth: 1,
              borderColor: '#000',
              padding: 2,
            }}>
            <ScrollView
              contentContainerStyle={{ borderWidth: 1, borderColor: 'red' }}
              horizontal>
              <Animated.View
                style={[
                  {
                    flex: 1,
                    width: 1000,
                    height: 1000,
                    backgroundColor: 'white',
                    borderWidth: 2,
                    borderColor: 'green',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                  },
                  animatedStyle,
                ]}>
                <CircleNode />
                <CircleNode />
                <CircleNode />
                <CircleNode />
              </Animated.View>
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </GestureDetector>
  );
};

export default FamilyTree;

const CircleNode = ({ node, children, siblings, scale }) => {
  return <View style={[styles.circle]}></View>;
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 50,
  },
});
