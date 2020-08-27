import React, { FC } from "react";
import {
  ScrollView,
  View,
  ActivityIndicator,
  TextInput,
  Text,
} from "react-native";
import { Image } from "react-native-elements";
import { styles } from "../../styles/postedImageDetail";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import DetailPostedPageItems from "../molecules/DetailPostedPageItems";
import KeyboardInputView from "../../containers/molecules/KeyboardInputView";
import CommentInputField from "../../containers/molecules/CommentInputField";
import CommentField from "../../containers/molecules/CommentField";

type CommentDataList = {
  uid: string;
  message: string;
  create_time: string;
};

type Props = {
  photo_id: string;
  uid: string;
  create_time: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  commentDataList: firebase.firestore.DocumentData[];
  textInputRef: React.MutableRefObject<TextInput | null>;
  focusOnInput: () => void;
};

const PostedImageDetail: FC<Props> = ({ ...props }) => {
  const {
    photo_id,
    uid,
    create_time,
    url,
    favoriteNumber,
    latitude,
    longitude,
    commentDataList,
    textInputRef,
    focusOnInput,
  } = props;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <InformationUserPosted create_time={create_time} uid={uid} />
          <Image
            style={styles.image}
            source={{
              uri: url,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <DetailPostedPageItems
            favoriteNumber={favoriteNumber}
            latitude={latitude}
            longitude={longitude}
          />
        </View>
        <CommentInputField focusOnInput={focusOnInput} />
        {commentDataList !== undefined &&
          commentDataList.map((item, index) => (
            <View key={index}>
              <CommentField
                uid={item.uid}
                message={item.message}
                createTime={item.create_time}
              />
            </View>
          ))}
      </ScrollView>
      <KeyboardInputView textInputRef={textInputRef} photo_id={photo_id} />
    </View>
  );
};

export default PostedImageDetail;
