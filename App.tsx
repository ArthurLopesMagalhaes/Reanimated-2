import "react-native-gesture-handler";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { AnimatedTabs } from "./src/AnimatedTabs";

import { BasicsReanimated } from "./src/BasicsReanimated";
import { CircularProgressBar } from "./src/CircularProgressBar";
import { InterpolateColors } from "./src/InterpolateColors";
import { PanGesture } from "./src/PanGesture";
import { PerspectiveMenu } from "./src/PerspectiveMenu";
import { InterpolateScrollView } from "./src/ScrollView";

function App() {
  return <CircularProgressBar />;
}

export default gestureHandlerRootHOC(App);
