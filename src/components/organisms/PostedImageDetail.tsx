import React, { FC } from "react";
import { ScrollView, View, Text, TextInput } from "react-native";
import { Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { UseInputResult } from "../../utilities/hooks/input";
import { styles } from "../../styles/postedImageDetail";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import DetailPostedPageItems from "../molecules/DetailPostedPageItems";
import KeyboardInputView from "../atoms/home/KeyboardInputView";

type Props = {
  photo_id: string;
  uid: string;
  createTime: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  commentList: any;
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
    commentList,
    commentCount,
    inputValue,
  } = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
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
        {commentList !== undefined &&
          commentList.map((item, index) => (
            <View key={index}>
              <Text>{item.test}</Text>
            </View>
          ))}
      </ScrollView>
      <KeyboardInputView inputValue={inputValue} />
    </View>
  );
};

export default PostedImageDetail;
