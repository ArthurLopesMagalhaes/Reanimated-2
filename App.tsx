import "react-native-gesture-handler";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { BasicsReanimated } from "./src/BasicsReanimated";
import { InterpolateColors } from "./src/InterpolateColors";
import { PanGesture } from "./src/PanGesture";
import { InterpolateScrollView } from "./src/ScrollView";

function App() {
  return <InterpolateColors />;
}

export default gestureHandlerRootHOC(App);
