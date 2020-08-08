import { StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  borderItem: {
    borderWidth: 0.3,
    borderColor: "#000",
    width: deviceWidth,
    height: 1,
    opacity: 0.5,
  },
});
