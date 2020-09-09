import React, { FC } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Image } from "react-native-elements";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
  postUserName: string;
  postUserImage: string;
  photogenic_subject: string;
  transitionToAnotherUser: () => void;
};

const InformationUserPosted: FC<Props> = ({ ...props }) => {
  const {
    postUserName,
    postUserImage,
    photogenic_subject,
    transitionToAnotherUser,
  } = props;

  return (
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
        <Text style={styles.userName}>{postUserName}</Text>
        <Text style={styles.photogenicSubjec}>{photogenic_subject}</Text>
      </View>
      <Text style={styles.dotsVertical}>
        <MaterialCommunityIcons name="dots-vertical" size={20} />
      </Text>
    </View>
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
