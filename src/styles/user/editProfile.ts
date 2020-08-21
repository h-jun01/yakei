import { StyleSheet } from "react-native";
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import { baseColor, utilityColor } from '../thema/colors'

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: baseColor.base,
  },
  editProWrap: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
  userImgWrap: {
    position: 'relative',
  },
  iconImg: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '25%',
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '26.1%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 180,
    width: deviceWidth / 5,
    height: deviceWidth / 5 + 1,
    backgroundColor: utilityColor.strongOverlay,
    zIndex: 2,
  },

  //インプットエリア
  inputWrap: {
    width: "96%",
    paddingTop: 10,
  },
  margin: {
    margin: 15,
  },
  userButton: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    backgroundColor: baseColor.accent,
    borderRadius: 5,
    paddingVertical: 15,
  },
  headerIcon: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  }
});
