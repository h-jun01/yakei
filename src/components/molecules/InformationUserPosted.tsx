import React, { FC } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
  navigation: any;
  uid: string;
  postUserName: string;
  postUserImage: string;
  photogenic_subject: string;
};

const InformationUserPosted: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    uid,
    postUserName,
    postUserImage,
    photogenic_subject,
  } = props;

  return (
    <View style={styles.userData}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          navigation.navigate("otherUser", {
            uid,
          })
        }
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

export default InformationUserPosted;
