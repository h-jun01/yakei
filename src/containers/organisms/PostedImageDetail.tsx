import React, { FC } from "react";
import PostedImageDetail from "../../components/organisms/PostedImageDetail";

type Props = {
  route: any;
};

const PostedImageDetailContainer: FC<Props> = ({ route }) => {
  const { photo_id, uid, createTime, url, latitude, longitude } = route.params;
  console.log(uid);

  return <PostedImageDetail />;
};

export default PostedImageDetailContainer;
