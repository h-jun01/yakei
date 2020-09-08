import React, { FC } from "react";
import News from "../../components/organisms/News";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/index";

const NewsContainer: FC = () => {
  const newsDataList = useSelector(
    (state: RootState) => state.newsReducer.newsDataList
  );
  return <News newsDataList={newsDataList} />;
};

export default NewsContainer;
