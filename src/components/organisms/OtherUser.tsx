import React, { FC } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { Image } from "react-native-elements";
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import UserImage from "../atoms/UserImage";
import TabMenu from "../../components/molecules/TabMenu";

type Props = {
  navigation: any;
  userData: firebase.firestore.DocumentData | undefined;
  postDataList: firebase.firestore.DocumentData[];
  favoriteDataList: firebase.firestore.DocumentData[];
};

const OtherUser: FC<Props> = ({ ...props }) => {
  const { navigation, userData, postDataList, favoriteDataList } = props;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.allWrap}>
        <View style={styles.userInfoWrap}>
          <Image
            source={{ uri: userData?.user_header_img }}
            style={{ width: deviceWidth, height: deviceHeight / 3 }}
            PlaceholderContent={<ActivityIndicator />}
          >
            <View style={styles.overlay}></View>
          </Image>
          <View style={styles.infoWrap}>
            <View style={styles.iconBox}>
              <UserImage
                userImage={userData?.user_img}
                size={deviceWidth / 5}
              />
            </View>
            <Text style={styles.userName}>
              {userData ? userData.name : "anonymous"}
            </Text>
            <Text style={styles.userIntro}>
              {userData && userData.self_introduction}
            </Text>
            <View style={styles.userState}>
              <Text style={styles.stateText}>
                {String(postDataList.length)}投稿
              </Text>
              <Text style={styles.stateText}>
                {String(favoriteDataList.length)}いいね
              </Text>
            </View>
          </View>
        </View>
        <TabMenu
          navigation={navigation}
          photoDataList={postDataList}
          favoriteItems={favoriteDataList}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: wp("100%"),
    marginLeft: "auto",
    marginRight: "auto",
    //フッターの高さ分あげる
    paddingBottom: 101,
  },
  overlay: {
    width: wp("100%"),
    height: wp("75%"),
    backgroundColor: utilityColor.overlay,
  },
  //ユーザー情報
  userInfoWrap: {
    flex: 1,
  },
  infoWrap: {
    width: wp("100%"),
    position: "absolute",
    alignSelf: "center",
    bottom: hp("2.5%"),
    zIndex: 1,
  },
  iconBox: {
    alignSelf: "center",
    marginBottom: hp("1%"),
  },
  userName: {
    alignSelf: "center",
    color: baseColor.text,
    fontSize: Size.userNameSize,
    fontWeight: "600",
    marginBottom: hp("1%"),
  },
  userIntro: {
    width: wp("65%"),
    alignSelf: "center",
    color: baseColor.text,
    fontSize: Size.NormalS,
    fontWeight: "500",
    lineHeight: Size.lineHeight,
    marginBottom: hp("3.5"),
    textAlign: "center",
  },
  userState: {
    flexDirection: "row",
  },
  stateText: {
    marginLeft: "auto",
    marginRight: "auto",
    color: baseColor.text,
    fontSize: Size.NormalS,
    fontWeight: "600",
    borderColor: "#fff",
  },
});

export default OtherUser;
