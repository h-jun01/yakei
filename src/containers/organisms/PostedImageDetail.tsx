import React, { FC } from "react";
import { useInput } from "../../utilities/hooks/input";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";

type Props = {
  route: any;
};

const PostedImageDetailContainer: FC<Props> = ({ route }) => {
  const {
    photo_id,
    uid,
    createTime,
    url,
    favoriteNumber,
    latitude,
    longitude,
    commentList,
  } = route.params;

  const inputValue = useInput("");
  const commentCount = commentList.length;

  return (
    <PostedImageDetail
      photo_id={photo_id}
      uid={uid}
      createTime={createTime}
      url={url}
      favoriteNumber={favoriteNumber}
      latitude={latitude}
      longitude={longitude}
      commentList={commentList}
      commentCount={commentCount}
      inputValue={inputValue}
    />
  );
};

export default PostedImageDetailContainer;
