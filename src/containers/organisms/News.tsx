import React, { FC } from "react";
import News from "../../components/organisms/News";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";

const NewsContainer: FC = () => {
  const newsDataList = useSelector(
    (state: RootState) => state.newsReducer.newsDataList
  );
  const bottomHeight = useSelector(
    (state: RootState) => state.bottomNavReducer.height
  );
  return <News newsDataList={newsDataList} bottomHeight={bottomHeight} />;
};

export default NewsContainer;
