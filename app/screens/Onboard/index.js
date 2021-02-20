import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, PROPERTIVE } from '../../config/styles';
import { SCREEN } from '../../navigation/Constant';
import Dot from './Dot';
import Slide from './Slide';
import Subtitle from './Subtitle';

const SLIDES = [
  {
    color: '#8b8b88',
    subtitle: 'A New Walk Of Fife',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisciet praesentium.',
    image: require('../../assets/images/onboard_1.jpg'),
  },
  {
    color: '#8bbd67',
    subtitle: 'Be Comfy, Be The Best',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisciet praesentium.',
    image: require('../../assets/images/onboard_2.jpg'),
  },
  {
    color: '#f7c78a',
    subtitle: 'Desire The Feel Of Satisfaction',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisciet praesentium.',
    image: require('../../assets/images/onboard_3.jpg'),
  },
  {
    color: '#94664c',
    subtitle: 'Creation For Creative Peoples',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisciet praesentium.',
    image: require('../../assets/images/onboard_4.jpg'),
  },
];

export default function Onboard({ navigation }) {
  const x = useRef(new Animated.Value(0)).current;
  const scroll = useRef();
  const inputRange = SLIDES.map((_, i) => PROPERTIVE.width * i);
  const outputRange = SLIDES.map((slide) => slide.color);
  const backgroundColor = x.interpolate({
    inputRange,
    outputRange,
  });

  const translateX = x.interpolate({
    inputRange,
    outputRange: SLIDES.map((_, i) => PROPERTIVE.width * -i),
  });

  const onNext = (index, last) => {
    if (last) {
      navigation.replace(SCREEN.HOME);
    } else if (scroll.current) {
      scroll.current.scrollTo({
        x: PROPERTIVE.width * index,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {SLIDES.map((slide, index) => {
          const opacity = x.interpolate({
            inputRange: [
              (index - 1) * PROPERTIVE.width,
              index * PROPERTIVE.width,
              (index + 1) * PROPERTIVE.width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.imageContent, { opacity }]}>
              <Image source={slide.image} style={styles.image} />
            </Animated.View>
          );
        })}
        <ScrollView
          horizontal
          ref={scroll}
          bounces={false}
          decelerationRate="fast"
          scrollEventThrottle={1}
          snapToInterval={PROPERTIVE.width}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x } } }],
            { useNativeDriver: false },
          )}>
          {SLIDES.map((slide, index) => (
            <Slide key={index} slide={slide} {...{ index, x }} />
          ))}
        </ScrollView>
      </Animated.View>
      <Animated.View style={[styles.footer, { backgroundColor }]}>
        <View style={styles.footerContent}>
          <View style={styles.dotContent}>
            {SLIDES.map((_, index) => (
              <Dot
                onPress={() => onNext(index)}
                key={index}
                {...{ index, x }}
              />
            ))}
          </View>
          <Animated.View
            style={[
              styles.subtitleContent,
              {
                width: PROPERTIVE.width * SLIDES.length,
                transform: [{ translateX }],
              },
            ]}>
            {SLIDES.map(({ subtitle, description }, index) => (
              <Subtitle
                key={index}
                onPress={() => {
                  onNext(index + 1, index === SLIDES.length - 1);
                }}
                last={index === SLIDES.length - 1}
                {...{ subtitle, description, x }}
              />
            ))}
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  slider: {
    height: 0.61 * PROPERTIVE.height,

    borderBottomRightRadius: 75,
  },
  imageContent: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '80%',
    height: '90%',
    borderRadius: 30,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    borderTopLeftRadius: 75,
    backgroundColor: COLORS.white,
  },
  dotContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    // ...StyleSheet.absoluteFill,
    top: 30,
    zIndex: 1,
  },
  subtitleContent: {
    flex: 1,
    flexDirection: 'row',
  },
});
