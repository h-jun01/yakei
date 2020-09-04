import React, { FC } from "react";
import { useSelector } from "react-redux";
import Post from "../../components/organisms/Post";
import { RootState } from "../../reducers/index";

const PostContainer: FC = () => {
  const uri = useSelector((state: RootState) => state.postReducer.uri);
  return <Post uri={uri} />;
};

export default PostContainer;
