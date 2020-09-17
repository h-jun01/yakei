import React, { FC, useState, useEffect, useRef } from "react";
import { TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { commentFireStore } from "../../firebase/commentFireStore";
import { setCommentDataList, setIsInputForm } from "../../actions/postedData";
import {
  setTabState,
  setShouldDisplayBottomNav,
  setShouldNavigate,
} from "../../actions/bottomNav";
import { HomeScreenStackParamList } from "../../screens/HomeScreen";
import { PickUpScreenStackParamList } from "../../screens/PickUpScreen";
import { UserScreenStackParamList } from "../../screens/UserScreen";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { baseColor } from "../../styles/thema/colors";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type PostScreenRouteProp = RouteProp<
  | HomeScreenStackParamList
  | PickUpScreenStackParamList
  | UserScreenStackParamList,
  "post"
>;

type Props = {
  route: PostScreenRouteProp;
  navigation: StackNavigationProp<Record<string, object>>;
};

const assignImageAspectRatio = (
  uri: string,
  set: React.Dispatch<React.SetStateAction<number>>
) => {
  Image.getSize(
    uri,
    (width, height) => {
      set(height / width);
    },
    (error) => {
      console.log(error);
    }
  );
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
  } = route.params.imageData;
  const shouldHeaderLeftBeCross = route.params.shouldHeaderLeftBeCross;

  const selectCommentDataList = (state: RootState) =>
    state.postedDataReducer.commentDataList;
  const selectBottomHeight = (state: RootState) =>
    state.bottomNavReducer.height;

  const commentDataList = useSelector(selectCommentDataList);
  const bottomHeight = useSelector(selectBottomHeight);
  const textInputRef = useRef<TextInput>(null);
  const [aspectRatio, setAspectRatio] = useState<number>(1);
  const dispatch = useDispatch();

  // 投稿画面から遷移した場合、ヘッダーのボタンを書き換える
  useEffect(() => {
    if (shouldHeaderLeftBeCross === undefined) return;
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
      dispatch(setCommentDataList([]));
    };
    commentFireStore.getCommentDataList(photo_id).then((res) => {
      dispatch(setCommentDataList(res));
    });

    return () => emptyCommentDataList();
  }, [photo_id, setCommentDataList]);

  // コメント入力時にフォーカスさせる
  const focusOnInput = () => {
    textInputRef.current?.focus();
    dispatch(setShouldDisplayBottomNav(false));
    dispatch(setIsInputForm(true));
  };

  // 画像のwidthとheightを取得
  assignImageAspectRatio(url, setAspectRatio);

  return (
    <PostedImageDetail
      navigation={navigation}
      photo_id={photo_id}
      uid={uid}
      create_time={create_time}
      url={url}
      aspectRatio={aspectRatio}
      latitude={latitude}
      longitude={longitude}
      photogenic_subject={photogenic_subject}
      commentDataList={commentDataList}
      textInputRef={textInputRef}
      focusOnInput={focusOnInput}
      bottomHeight={bottomHeight}
      img_index={img_index}
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
