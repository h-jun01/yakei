import React, { FC } from "react";
import Notice from "../../../components/organisms/user/Notice";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers/index";

const NoticeContainer: FC = () => {
  const noticeDataList = useSelector(
    (state: RootState) => state.noticeReducer.noticeDataList
  );
  return <Notice noticeDataList={noticeDataList} />;
};

export default NoticeContainer;
