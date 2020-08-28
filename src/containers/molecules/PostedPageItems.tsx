import React, { FC } from "react";
import { RootState } from "../../reducers/index";
import { useSelector } from "react-redux";
import { commentFireStore } from "../../firebase/commentFireStore";
import PostedPageItems from "../../components/molecules/PostedPageItems";

type Props = {
  navigation: any;
  photo_id: string;
  uid: string;
  create_time: string;
  url: string;
  favoriteNumber: number;
  latitude: number;
  longitude: number;
};

const PostedPageItemsContainer: FC<Props> = ({ ...props }) => {
  const {
    navigation,
    photo_id,
    uid,
    create_time,
    url,
    favoriteNumber,
    latitude,
    longitude,
  } = props;

  const selrctCommentDataList = (state: RootState) =>
    state.postedDataReducer.commentDataList;
  const commentDataList = useSelector(selrctCommentDataList);

  // コメント数取得・修正すること
  const [commentCount, setCommentCount] = React.useState<number>(0);
  React.useEffect(() => {
    commentFireStore.getCommentDataList(photo_id).then((res) => {
      setCommentCount(res.length);
    });
  }, [commentDataList, setCommentCount]);

  return (
    <PostedPageItems
      navigation={navigation}
      photo_id={photo_id}
      uid={uid}
      create_time={create_time}
      url={url}
      favoriteNumber={favoriteNumber}
      latitude={latitude}
      longitude={longitude}
      commentCount={commentCount}
    />
  );
};

export default PostedPageItemsContainer;
