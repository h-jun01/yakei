import React, { FC, MutableRefObject, Fragment } from "react";
import { ScrollView, View, TextInput } from "react-native";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import { Timestamp } from "@google-cloud/firestore";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { baseColor } from "../../styles/thema/colors";
import { deviceWidth } from "../../utilities/dimensions";
import InformationUserPosted from "../../containers/molecules/InformationUserPosted";
import DetailPostedPageItems from "../../containers/molecules/DetailPostedPageItems";
import KeyboardInputView from "../../containers/molecules/KeyboardInputView";
import CommentInputField from "../../containers/molecules/CommentInputField";
import CommentField from "../../containers/molecules/CommentField";

type PostScreenNavigationProp = StackNavigationProp<
  | HomeScreenStackParamList
  | PickUpScreenStackParamList
  | UserScreenStackParamList,
  "otherUser"
>;

type Props = {
  navigation: PostScreenNavigationProp;
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
  commentDataList: firebase.firestore.DocumentData[];
  textInputRef: MutableRefObject<TextInput | null>;
  bottomHeight: number;
  img_index: string;
  aspectRatio: number;
  setCommentDataList: React.Dispatch<
    React.SetStateAction<firebase.firestore.DocumentData[]>
  >;
  focusOnInput: () => void;
};

const PostedImageDetail: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    photo_id,
    uid,
    create_time,
    url,
    latitude,
    longitude,
    photogenic_subject,
    commentDataList,
    textInputRef,
    focusOnInput,
    bottomHeight,
    img_index,
    aspectRatio,
    setCommentDataList,
  } = props;

  const imageHeight =
    deviceWidth * aspectRatio > deviceWidth * 1.25
      ? deviceWidth * 1.25
      : deviceWidth * aspectRatio;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.allWrap}>
        <View style={{ paddingBottom: bottomHeight }}>
          <View>
            <InformationUserPosted
              navigation={navigation}
              uid={uid}
              photo_id={photo_id}
              photogenic_subject={photogenic_subject}
              img_index={img_index}
              url={url}
            />
            <Image
              style={{
                width: deviceWidth,
                height: imageHeight,
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
              <Fragment key={index}>
                <CommentField
                  uid={item.uid}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  message={item.message}
                  create_time={item.create_time}
                  navigation={navigation}
                />
              </Fragment>
            ))}
        </View>
      </ScrollView>
      <KeyboardInputView
        textInputRef={textInputRef}
        photo_id={photo_id}
        uid={uid}
        url={url}
        setCommentDataList={setCommentDataList}
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
  },
});

export default PostedImageDetail;
