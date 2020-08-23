import React, { FC } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../../styles/user/user";
import Icon from "react-native-vector-icons/FontAwesome";
import { deviceWidth, deviceHeight } from "../../../utilities/dimensions";
import UserImage from "../../atoms/user/UserImage";
import TabMenu from "../../../containers/molecules/TabMenu";

type Props = {
  navigation: any;
  name: string;
  image: string;
  headerImage: string;
  selfIntroduction: string;
};

const User: FC<Props> = ({ ...props }) => {
  const { navigation, name, image, headerImage, selfIntroduction } = props;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.allWrap}>
        <View style={styles.userInfoWrap}>
          <Image
            source={{ uri: headerImage }}
            style={{ width: deviceWidth, height: deviceHeight / 3 }}
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
              <Text style={styles.stateText}>投稿数</Text>
              <Text style={styles.stateText}>いいね数</Text>
            </View>
            <Text
              style={styles.buttonItem}
              onPress={() => navigation.navigate("setting")}
            >
              <Icon name="cog" size={23} color={"#fff"} />
            </Text>
          </View>
        </View>
        <TabMenu navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default User;
