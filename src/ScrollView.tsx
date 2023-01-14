import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Page } from "./components/Page";

const WORDS = ["What's", "up", "mobile", "devs?"];

export const InterpolateScrollView = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      style={styles.container}
      pagingEnabled
      horizontal
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {WORDS.map((item, index) => (
        <Page
          index={index}
          title={item}
          key={index.toString()}
          translateX={translateX}
        />
      ))}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
