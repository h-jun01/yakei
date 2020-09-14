import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import {
  View,
  ScrollView,
  Text,
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
import { iconSize } from "../../styles/thema/fonts";
import { deviceWidth } from "../../utilities/dimensions";
import Icon from "react-native-vector-icons/FontAwesome";
import UserImage from "../atoms/UserImage";
import TabMenu from "../../containers/molecules/TabMenu";

type Props = {
  navigation: any;
  name: string;
  image: string;
  headerImage: string;
  selfIntroduction: string;
  myPhotoDataListCount: number;
  favoriteListCount: number;
  bottomHeight: number;
};

const User: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    name,
    image,
    headerImage,
    selfIntroduction,
    myPhotoDataListCount,
    favoriteListCount,
    bottomHeight,
  } = props;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.allWrap, { paddingBottom: bottomHeight }]}>
        <View style={styles.userInfoWrap}>
          <Image
            source={{ uri: headerImage }}
            style={{
              width: wp("100%"),
              height: platformIOS.isPad ? hp("38") : hp("35%"),
            }}
            PlaceholderContent={<ActivityIndicator />}
          >
            <View style={styles.overlay}></View>
          </Image>
          <View style={styles.infoWrap}>
            <View style={styles.iconBox}>
              <UserImage
                userImage={image}
                size={platformIOS.isPad ? deviceWidth / 6.5 : deviceWidth / 5}
              />
            </View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userIntro}>{selfIntroduction}</Text>
            <View style={styles.userState}>
              <Text style={styles.stateText}>{myPhotoDataListCount}投稿</Text>
              <Text style={styles.stateText}>{favoriteListCount}いいね</Text>
            </View>
            <Text
              style={styles.buttonItem}
              onPress={() => navigation.navigate("setting")}
            >
              <Icon
                name="cog"
                size={platformIOS.isPad ? iconSize.Small : iconSize.Normal}
                color={"#fff"}
              />
            </Text>
          </View>
        </View>
        <TabMenu navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

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
    height: platformIOS.isPad ? hp("38") : hp("35%"),
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
    marginBottom: hp("1.2%"),
  },
  userName: {
    alignSelf: "center",
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Xlarge : Size.userNameSize,
    fontWeight: "600",
    marginBottom: hp("1.2%"),
  },
  userIntro: {
    width: wp("65%"),
    alignSelf: "center",
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.NormalS,
    fontWeight: "500",
    lineHeight: Size.lineHeight,
    marginBottom: hp("2.5"),
    textAlign: "center",
  },
  userState: {
    flexDirection: "row",
  },
  stateText: {
    marginLeft: "auto",
    marginRight: "auto",
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.NormalS,
    fontWeight: "600",
    borderColor: "#fff",
  },
  //設定への遷移
  buttonItem: {
    position: "absolute",
    top: hp("0%"),
    right: wp("5%"),
  },
});

export default User;
