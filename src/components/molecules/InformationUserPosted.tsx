import React, { FC, Fragment, RefObject } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { Image } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RBSheet from "react-native-raw-bottom-sheet";
import Report from "../organisms/Report";
import ReportScreen from "../../screens/ReportScreen";

type Props = {
  postUserName: string;
  postUserImage: string;
  photogenic_subject: string;
  refRBSheet: RefObject<RBSheet>;
  transitionToAnotherUser: () => void;
  _onOpenActionSheet: () => void;
};

const InformationUserPosted: FC<Props> = ({ ...props }) => {
  const {
    postUserName,
    postUserImage,
    photogenic_subject,
    refRBSheet,
    transitionToAnotherUser,
    _onOpenActionSheet,
  } = props;

  return (
    <Fragment>
      <View style={styles.userData}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => transitionToAnotherUser()}
        >
          <Image
            style={styles.userIcon}
            source={{
              uri: postUserImage,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </TouchableOpacity>
        <View style={styles.userName}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => transitionToAnotherUser()}
          >
            <Text style={styles.userName}>{postUserName}</Text>
          </TouchableOpacity>
          <Text style={styles.photogenicSubjec}>{photogenic_subject}</Text>
        </View>
        <Text style={styles.dotsVertical} onPress={() => _onOpenActionSheet()}>
          <MaterialCommunityIcons name="dots-vertical" size={20} />
        </Text>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={600}
        openDuration={180}
        closeDuration={180}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: utilityColor.overlay,
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}
      >
        <Report>
          <ReportScreen />
        </Report>
      </RBSheet>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  userIcon: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 180,
    marginRight: wp("3%"),
  },
  userData: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1.5%"),
    marginBottom: hp("1%"),
    marginLeft: wp("2.5%"),
  },
  userName: {
    color: baseColor.text,
    fontSize: Size.Normal,
    fontWeight: "600",
    marginBottom: hp(".3%"),
  },
  photogenicSubjec: {
    width: 300,
    color: baseColor.grayText,
    fontSize: Size.Small,
    fontWeight: "400",
  },
  dotsVertical: {
    color: baseColor.text,
    fontSize: Size.Small,
    marginTop: hp(".5%"),
    marginLeft: "auto",
    marginRight: wp("2.5%"),
  },
});

export default InformationUserPosted;
