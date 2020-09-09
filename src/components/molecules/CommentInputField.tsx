import React, { FC } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { baseColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type Props = {
  userImage: string;
  focusOnInput: () => void;
};

const CommentInputField: FC<Props> = ({ userImage, focusOnInput }) => {
  return (
    <View style={styles.commentInputField}>
      <Image
        style={styles.userIcon}
        source={{
          uri: userImage,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.tapInputField}>
        <Text style={styles.tapInputText} onPress={() => focusOnInput()}>
          コメントを入力...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentInputField: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("1%"),
    marginBottom: hp("1%"),
    marginLeft: wp("3%"),
  },
  tapInputField: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("80%"),
    minHeight: 30,
    borderRadius: 15,
    paddingVertical: hp("1.3%"),
    paddingLeft: wp("3%"),
    marginLeft: wp("3%"),
    backgroundColor: "#fff",
  },
  tapInputText: {
    width: wp("100%"),
    color: "#505050",
  },
  userIcon: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: 180,
  },
});

export default CommentInputField;
