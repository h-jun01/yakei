import React, { FC } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/user/user";
import Icon from "react-native-vector-icons/FontAwesome";
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

export default OtherUser;
