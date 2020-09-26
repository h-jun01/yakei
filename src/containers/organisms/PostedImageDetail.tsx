import React, { FC, useState, useEffect, useRef } from "react";
import { TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Platform } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useSelector, useDispatch } from "react-redux";
import { StackActions } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { AdMobInterstitial } from "expo-ads-admob";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { RootState } from "../../reducers/index";
import { callingAlert } from "../../utilities/alert";
import { commentFireStore } from "../../firebase/commentFireStore";
import { setIsInputForm } from "../../actions/postedData";
import { baseColor } from "../../styles/thema/colors";
import {
  setTabState,
  setShouldDisplayBottomNav,
  setShouldNavigate,
} from "../../actions/bottomNav";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type PostScreenNavigationProp = StackNavigationProp<
  | HomeScreenStackParamList
  | PickUpScreenStackParamList
  | UserScreenStackParamList,
  "otherUser"
>;

type PostScreenRouteProp = RouteProp<
  | HomeScreenStackParamList
  | PickUpScreenStackParamList
  | UserScreenStackParamList,
  "post"
>;

type Props = {
  route: PostScreenRouteProp;
  navigation: PostScreenNavigationProp;
};

const showInterstitial = async () => {
  AdMobInterstitial.setAdUnitID(
    __DEV__
      ? "ca-app-pub-3940256099942544/1033173712" // テスト広告
      : (Platform.select({
          ios: "広告ユニットID", // iOS
          android: "広告ユニットID", // android
        }) as string)
  ); // Test ID, Replace with your-admob-unit-id
  await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  await AdMobInterstitial.showAdAsync();
};

const PostedImageDetailContainer: FC<Props> = ({ route, navigation }) => {
  const {
    photo_id,
    uid,
    create_time,
    url,
    latitude,
    longitude,
    photogenic_subject,
    img_index,
    aspectRatio,
  } = route.params.imageData;
  const shouldHeaderLeftBeCross = route.params.shouldHeaderLeftBeCross;

  const selectBottomHeight = (state: RootState) =>
    state.bottomNavReducer.height;
  const selectMyPhotoDataList = (state: RootState) =>
    state.myPhotoReducer.photoDataList;

  const bottomHeight = useSelector(selectBottomHeight);
  const myPhotoDataList = useSelector(selectMyPhotoDataList);

  const textInputRef = useRef<TextInput>(null);
  const dispatch = useDispatch();

  const [commentDataList, setCommentDataList] = useState<
    firebase.firestore.DocumentData[]
  >([]);

  // 投稿画面から遷移した場合、ヘッダーのボタンを書き換える
  useEffect(() => {
    if (shouldHeaderLeftBeCross === undefined) return;
    myPhotoDataList.length % 3 === 0 && showInterstitial();
    const onPress = () => {
      // スポット画面に遷移
      dispatch(setTabState("スポット"));
      dispatch(setShouldDisplayBottomNav(true));
      dispatch(setShouldNavigate(true));
      navigation.dispatch(StackActions.popToTop());
    };
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => onPress()}
          style={styles.headerBtn}
        >
          <FontAwesome name="times" style={styles.crossBtnIcon} />
        </TouchableOpacity>
      ),
    });
  }, []);

  // コメント取得
  useEffect(() => {
    const emptyCommentDataList = () => {
      setCommentDataList([]);
    };
    commentFireStore.getCommentDataList(photo_id).then((res) => {
      res && setCommentDataList(res);
    });

    return () => emptyCommentDataList();
  }, []);

  useEffect(() => {
    Image.getSize(
      url,
      () => {},
      (error) => {
        callingAlert("この投稿は既に削除されている可能性があります。");
      }
    );
  }, []);

  // コメント入力時にフォーカスさせる
  const focusOnInput = () => {
    textInputRef.current?.focus();
    dispatch(setShouldDisplayBottomNav(false));
    dispatch(setIsInputForm(true));
  };

  return (
    <PostedImageDetail
      navigation={navigation}
      photo_id={photo_id}
      uid={uid}
      create_time={create_time}
      url={url}
      latitude={latitude}
      longitude={longitude}
      photogenic_subject={photogenic_subject}
      commentDataList={commentDataList}
      textInputRef={textInputRef}
      focusOnInput={focusOnInput}
      bottomHeight={bottomHeight}
      img_index={img_index}
      aspectRatio={aspectRatio}
      setCommentDataList={setCommentDataList}
    />
  );
};

const styles = StyleSheet.create({
  // 閉じるボタン
  headerBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
  },
  // 閉じるボタン内のアイコン
  crossBtnIcon: {
    color: baseColor.text,
    fontSize: wp("5.6%"),
    fontWeight: "bold",
  },
});

export default PostedImageDetailContainer;
