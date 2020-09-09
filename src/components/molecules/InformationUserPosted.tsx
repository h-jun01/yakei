import React, { FC } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/imageList";
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

export default InformationUserPosted;
