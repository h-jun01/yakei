import React, { FC, Fragment } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";

type NewsDataList = {
  title: string;
  message: string;
  time: string;
};

type Props = {
  newsDataList: NewsDataList[];
};

const News: FC<Props> = ({ newsDataList }) => {
  return (
    <View style={styles.container}>
      {newsDataList.map((item, index) => (
        <Fragment key={index}>
          <Text>{item.title}</Text>
          <Text>{item.message}</Text>
          <Text>{item.time}</Text>
          <View style={styles.borderItem} />
        </Fragment>
      ))}
    </View>
  );
};

export default News;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  borderItem: {
    borderWidth: 0.3,
    borderColor: "#000",
    width: deviceWidth,
    height: 1,
    opacity: 0.5,
  },
});
