import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const SIZE = 100.0;
const CIRCLE_RADIUS = SIZE * 2;

type ContextType = {
  translatedX: number;
  translatedY: number;
};

export const PanGesture = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translatedX = translateX.value;
      context.translatedY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translatedX;
      translateY.value = event.translationY + context.translatedY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADIUS) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0,0,255, 0.5)",
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_RADIUS * 1.8,
    height: CIRCLE_RADIUS * 1.8,
    borderRadius: CIRCLE_RADIUS,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "rgba(0,0,255, 0.5)",
  },
});
