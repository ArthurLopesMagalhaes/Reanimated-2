import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SIZE = 100.0;

const handleRotation = (progress: Animated.SharedValue<number>) => {
  "worklet";
  return `${progress.value * 2 * Math.PI}rad`;
};

export const BasicsReanimated = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);
  const color = useSharedValue("blue");
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 1.5,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
      backgroundColor: color.value,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), 3, true);
    color.value = withTiming("red", { duration: 3000 });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { height: SIZE, width: SIZE, backgroundColor: "blue" },
          reanimatedStyle,
        ]}
      />
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
});
