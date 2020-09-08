import React, { FC, useEffect, useRef } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { commentFireStore } from "../../firebase/commentFireStore";
import { setCommentDataList, setIsInputForm } from "../../actions/postedData";
import { setShouldDisplayBottomNav } from "../../actions/bottomNav";
import { setShouldNavigateMap } from "../../actions/mapNavigate";
import { styles } from "../../styles/post";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type routeObj = {
  imageData: firebase.firestore.DocumentData;
  shouldHeaderLeftBeCross?: boolean;
};

type Props = {
  route: RouteProp<Record<string, routeObj>, string>;
  navigation: StackNavigationProp<Record<string, object>>;
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
  } = route.params.imageData;
  const shouldHeaderLeftBeCross = route.params.shouldHeaderLeftBeCross;

  const selrctCommentDataList = (state: RootState) =>
    state.postedDataReducer.commentDataList;

  const commentDataList = useSelector(selrctCommentDataList);
  const textInputRef = useRef<null | TextInput>(null);
  const dispatch = useDispatch();

  // 投稿画面から遷移した場合、ヘッダーのボタンを書き換える
  useEffect(() => {
    if (shouldHeaderLeftBeCross === undefined) return;
    const onPress = () => {
      dispatch(setShouldDisplayBottomNav(true));
      dispatch(setShouldNavigateMap(true));
    };
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPress()}>
          <FontAwesome name="times" style={styles.crossButton} />
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
    dispatch(setIsInputForm(true));
  };

  return (
    <PostedImageDetail
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
    />
  );
};

export default PostedImageDetailContainer;
