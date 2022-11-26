import React from 'react';
import {Animated, Image, StyleSheet} from 'react-native';
import {PinchGestureHandler} from 'react-native-gesture-handler';
import {useAnimatedGestureHandler} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const FamilyTree = () => {
  const pinchHandler = useAnimatedGestureHandler({
    onActive: event => {
      console.log(event);
    },
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <AnimatedImage
        source={{
          uri: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1600',
        }}
        style={{flex: 1}}
      />
    </PinchGestureHandler>
  );
};

export default FamilyTree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
  pinchableImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: 'red',
    padding: 10,
  },
});
