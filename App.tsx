import "react-native-gesture-handler";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { BasicsReanimated } from "./src/BasicsReanimated";
import { PanGesture } from "./src/PanGesture";

function App() {
  return <PanGesture />;
}

export default gestureHandlerRootHOC(App);
