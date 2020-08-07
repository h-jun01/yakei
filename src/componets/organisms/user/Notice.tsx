import React, { FC, Fragment } from "react";
import { View, Text } from "react-native";

type NoticeDataList = {
  message: string;
  time: string;
};

type Props = {
  noticeDataList: NoticeDataList[];
};

const Notice: FC<Props> = ({ noticeDataList }) => {
  return (
    <View>
      {console.log(noticeDataList)}
      {noticeDataList.map((item, index) => (
        <Fragment key={index}>
          <Text>{item.message}</Text>
          <Text>{item.time}</Text>
        </Fragment>
      ))}
    </View>
  );
};

export default Notice;
