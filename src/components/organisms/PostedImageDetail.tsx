import React, { FC } from "react";
import { ScrollView, View, Text, TextInput } from "react-native";
import { Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { UseInputResult } from "../../utilities/hooks/input";
import { styles } from "../../styles/postedImageDetail";
import KeyboardStickyView from "rn-keyboard-sticky-view";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import DetailPostedPageItems from "../molecules/DetailPostedPageItems";

type Props = {
  photo_id: string;
  uid: string;
  createTime: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  commentCount: number;
  inputValue: UseInputResult;
};

const PostedImageDetail: FC<Props> = ({ ...props }) => {
  const {
    photo_id,
    uid,
    createTime,
    url,
    favoriteNumber,
    latitude,
    longitude,
    commentCount,
    inputValue,
  } = props;

  return (
    <ScrollView>
      <View style={styles.container}>
        <InformationUserPosted createTime={createTime} uid={uid} />
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <DetailPostedPageItems
          commentCount={commentCount}
          latitude={latitude}
          longitude={longitude}
        />
      </View>
      <KeyboardStickyView>
        <TextInput
          {...inputValue}
          onSubmitEditing={() => alert(inputValue.value)}
          placeholder="コメントを入力..."
        />
      </KeyboardStickyView>
    </ScrollView>
  );
};

export default PostedImageDetail;
