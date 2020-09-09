import React, { FC } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/user/user";
import { iconSize } from "../../styles/thema/fonts";
import Icon from "react-native-vector-icons/FontAwesome";
import { deviceWidth, deviceHeight } from "../../utilities/dimensions";
import UserImage from "../atoms/UserImage";
import TabMenu from "../../containers/molecules/TabMenu";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type Props = {
  navigation: any;
  name: string;
  image: string;
  headerImage: string;
  selfIntroduction: string;
  myPhotoDataListCount: number;
  favoriteListCount: number;
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
  } = props;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.allWrap}>
        <View style={styles.userInfoWrap}>
          <Image
            source={{ uri: headerImage }}
            style={{ width: wp("100%"), height: wp("65%") }}
            PlaceholderContent={<ActivityIndicator />}
          >
            <View style={styles.overlay}></View>
          </Image>
          <View style={styles.infoWrap}>
            <View style={styles.iconBox}>
              <UserImage userImage={image} size={deviceWidth / 5} />
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
              <Icon name="cog" size={iconSize.Normal} color={"#fff"} />
            </Text>
          </View>
        </View>
        <TabMenu navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default User;
