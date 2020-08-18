import React, { FC } from "react";
import {
  ScrollView,
  View,
  ActivityIndicator,
  TextInput,
  Text,
} from "react-native";
import { Image } from "react-native-elements";
import { UseInputResult } from "../../utilities/hooks/input";
import { styles } from "../../styles/postedImageDetail";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import DetailPostedPageItems from "../molecules/DetailPostedPageItems";
import KeyboardInputView from "../atoms/home/KeyboardInputView";
import CommentField from "../../containers/molecules/CommentField";

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

  const textInputRef = React.useRef<null | TextInput>(null);
  const [show, setShow] = React.useState(false);
  const focusOnInput = () => {
    textInputRef.current?.focus();
    setShow(true);
  };

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
              <CommentField
                uid={item.uid}
                message={item.message}
                createTime={item.createTime}
              />
            </View>
          ))}
        <Text onPress={() => focusOnInput()}>適当なボタン</Text>
      </ScrollView>
      <KeyboardInputView
        inputValue={inputValue}
        textInputRef={textInputRef}
        focusOnInput={focusOnInput}
        show={show}
        setShow={setShow}
      />
    </View>
  );
};

export default PostedImageDetail;
