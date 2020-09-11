import React, { FC, MutableRefObject } from "react";
import {
  ScrollView,
  View,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Image } from "react-native-elements";
import { Timestamp } from "@google-cloud/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import { baseColor } from "../../styles/thema/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import DetailPostedPageItems from "../../containers/molecules/DetailPostedPageItems";
import KeyboardInputView from "../../containers/molecules/KeyboardInputView";
import CommentInputField from "../../containers/molecules/CommentInputField";
import CommentField from "../../containers/molecules/CommentField";

type Props = {
  navigation: StackNavigationProp<Record<string, object>>;
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  aspectRatio: number;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
  commentDataList: firebase.firestore.DocumentData[];
  textInputRef: MutableRefObject<TextInput | null>;
  focusOnInput: () => void;
  bottomHeight: number;
};

const PostedImageDetail: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    photo_id,
    uid,
    create_time,
    url,
    aspectRatio,
    latitude,
    longitude,
    photogenic_subject,
    commentDataList,
    textInputRef,
    focusOnInput,
    bottomHeight,
  } = props;

  const displayWidth = Dimensions.get("window").width;

  return (
    <View style={[styles.container, { paddingBottom: bottomHeight }]}>
      <ScrollView style={styles.allWrap}>
        <View>
          <InformationUserPosted
            navigation={navigation}
            uid={uid}
            photogenic_subject={photogenic_subject}
          />
          <Image
            style={{
              width: displayWidth,
              height: displayWidth * aspectRatio,
            }}
            source={{
              uri: url,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <DetailPostedPageItems
            uid={uid}
            url={url}
            photo_id={photo_id}
            latitude={latitude}
            longitude={longitude}
            create_time={create_time}
          />
        </View>
        <CommentInputField focusOnInput={focusOnInput} />
        {commentDataList !== undefined &&
          commentDataList.map((item, index) => (
            <View key={index}>
              <CommentField
                uid={item.uid}
                message={item.message}
                create_time={item.create_time}
              />
            </View>
          ))}
      </ScrollView>
      <KeyboardInputView
        textInputRef={textInputRef}
        photo_id={photo_id}
        uid={uid}
        url={url}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseColor.base,
  },
  allWrap: {
    width: wp("100%"),
    paddingBottom: 101,
  },
});

export default PostedImageDetail;
