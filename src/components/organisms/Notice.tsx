import React, { FC, Fragment } from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/user/notice";

type NoticeDataList = {
  message: string;
  time: string;
};

type Props = {
  noticeDataList: NoticeDataList[];
};

const Notice: FC<Props> = ({ noticeDataList }) => {
  return (
    <View style={styles.container}>
      {noticeDataList.map((item, index) => (
        <Fragment key={index}>
          <Text>{item.message}</Text>
          <Text>{item.time}</Text>
          <View style={styles.borderItem} />
        </Fragment>
      ))}
    </View>
  );
};

export default Notice;
