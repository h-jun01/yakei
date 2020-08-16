import React, { FC } from "react";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";

type Props = {
  route: any;
};

const PostedImageDetailContainer: FC<Props> = ({ route }) => {
  const { photo_id, uid, createTime, url, latitude, longitude } = route.params;

  return (
    <PostedImageDetail
      photo_id={photo_id}
      uid={uid}
      createTime={createTime}
      url={url}
      latitude={latitude}
      longitude={longitude}
    />
  );
};

export default PostedImageDetailContainer;
