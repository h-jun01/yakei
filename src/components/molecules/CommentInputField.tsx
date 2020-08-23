import React, { FC } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/postedImageDetail";

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

export default CommentInputField;
