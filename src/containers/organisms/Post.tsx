import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/organisms/Post";
import { RootState } from "../../reducers/index";
import { setBottomNavStatus } from "../../actions/bottomNav";

const PostContainer: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBottomNavStatus(false));
    return () => {
      dispatch(setBottomNavStatus(true));
    };
  }, []);

  const uri = useSelector((state: RootState) => state.postReducer.uri);
  return <Post uri={uri} />;
};

export default PostContainer;
