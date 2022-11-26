import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

var root = {
  name: '',
  id: 1,
  hidden: true,
  children: [
    {
      name: 'Q',
      id: 16,
      no_parent: true,
      imageUrl: {
        href: {
          uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        },
      },
      nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
      nodeTextStyle: {fontSize: 12},
    },
    {
      name: '',
      id: 2,
      no_parent: true,
      hidden: true,
      children: [
        {
          name: 'J',
          id: 12,
          imageUrl: {
            href: {
              uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
            },
          },
          nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
          nodeTextStyle: {fontSize: 12},
        },
        {
          name: 'L',
          id: 13,
          no_parent: true,
          imageUrl: {
            href: {
              uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
            },
          },
          nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
          nodeTextStyle: {fontSize: 12},
        },
        {
          name: 'C',
          id: 3,
          imageUrl: {
            href: {
              uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
            },
          },
          nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
          nodeTextStyle: {fontSize: 12},
        },
        {
          name: '',
          id: 4,
          hidden: true,
          no_parent: true,
          children: [
            {
              name: 'D',
              id: 5,
              imageUrl: {
                href: {
                  uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                },
              },
              nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
              nodeTextStyle: {fontSize: 12},
            },
            {
              name: '',
              id: 14,
              hidden: true,
              no_parent: true,
              children: [
                {
                  name: 'P',
                  id: 15,
                  imageUrl: {
                    href: {
                      uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                    },
                  },
                  nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
                  nodeTextStyle: {fontSize: 12},
                },
              ],
            },
            {
              name: 'E',
              id: 6,
              imageUrl: {
                href: {
                  uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                },
              },
              nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
              nodeTextStyle: {fontSize: 12},
            },
          ],
        },
        {
          name: 'K',
          id: 11,
          imageUrl: {
            href: {
              uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
            },
          },
          nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
          nodeTextStyle: {fontSize: 12},
        },
        {
          name: 'G',
          id: 7,
          imageUrl: {
            href: {
              uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
            },
          },
          nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
          nodeTextStyle: {fontSize: 12},
          children: [
            {
              name: 'H',
              id: 8,
              imageUrl: {
                href: {
                  uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                },
              },
              nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
              nodeTextStyle: {fontSize: 12},
            },
            {
              name: 'I',
              id: 9,
              imageUrl: {
                href: {
                  uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
                },
              },
              nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
              nodeTextStyle: {fontSize: 12},
            },
          ],
        },
      ],
    },
    {
      name: 'M',
      id: 10,
      no_parent: true,
      imageUrl: {
        href: {
          uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        },
      },
      nodeImageStyle: {imageHeight: 60, imageWidth: 60, opacity: 1},
      nodeTextStyle: {fontSize: 12},
      children: [],
    },
    {
      name: 'anoop',
      id: 155,
      no_parent: true,
      children: [
        {
          name: 'H',
          id: 8,
        },
        {
          name: 'I',
          id: 9,
        },
        {
          name: 'I',
          id: 9,
        },
        {
          name: 'I',
          id: 9,
        },
        {
          name: 'I',
          id: 9,
        },
      ],
    },
    {
      name: 'x',
      id: 16,
      no_parent: true,
    },
  ],
};

var siblings = [
  {
    source: {
      id: 3,
      name: 'C',
    },
    target: {
      id: 11,
      name: 'K',
    },
  },
  {
    source: {
      id: 12,
      name: 'L',
    },
    target: {
      id: 13,
      name: 'J',
    },
  },
  {
    source: {
      id: 5,
      name: 'D',
    },
    target: {
      id: 6,
      name: 'E',
    },
  },
  {
    source: {
      id: 16,
      name: 'Q',
    },
    target: {
      id: 10,
      name: 'M',
    },
  },
];

const FamilyTree = () => {
  const panRef = useRef();
  const nativeGetureRef = useRef();
  const scrollvertical = useRef();
  const scrollhorizontal = useRef();
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
    transform: [{scale: scale.value}],
  }));

  console.log('render', animatedStyle);

  return (
    <GestureDetector gesture={pinchGesture}>
      <View style={{flex: 1, borderWidth: 1, padding: 5}}>
        <Animated.View
          style={[
            {
              borderWidth: 2,
              borderColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            },
            animatedStyle,
          ]}>
          <ScrollView horizontal>
            <CircleNode />
            <CircleNode />
            <CircleNode />
            <CircleNode />
          </ScrollView>
        </Animated.View>
      </View>
    </GestureDetector>
  );
};

export default FamilyTree;

const CircleNode = ({node, children, siblings, scale}) => {
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
