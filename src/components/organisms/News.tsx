import React, { FC, Fragment } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { Size } from "../../styles/thema/fonts";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

type NewsDataList = {
  title: string;
  message: string;
  time: string;
};

type Props = {
  newsDataList: NewsDataList[];
  bottomHeight: number;
};

const News: FC<Props> = ({ newsDataList, bottomHeight }) => {
  return (
    <View style={[styles.container, { paddingBottom: bottomHeight }]}>
      {newsDataList.map((item, index) => (
        <Fragment key={index}>
          <View style={styles.articleWrap}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsTimestamp}>{item.time}</Text>
            <Text style={styles.newsArticle}>{item.message}</Text>
          </View>
          <View style={styles.borderItem} />
        </Fragment>
      ))}
    </View>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("100%"),
    backgroundColor: baseColor.base,
  },
  articleWrap: {
    width: wp("95%"),
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: wp("4%"),
  },
  newsTitle: {
    fontSize: platformIOS.isPad ? Size.Normal : Size.Large,
    fontWeight: "600",
    color: baseColor.text,
    padding: wp("1.5%"),
  },
  newsTimestamp: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Small,
    fontWeight: "300",
    color: baseColor.text,
    padding: wp("1.5%"),
  },
  newsArticle: {
    fontSize: platformIOS.isPad ? Size.Small : Size.Normal,
    fontWeight: "400",
    color: baseColor.text,
    padding: wp("1.5%"),
    lineHeight: Size.lineHeight,
  },
  borderItem: {
    borderBottomWidth: 1,
    borderBottomColor: utilityColor.border,
    paddingTop: wp("4%"),
    width: deviceWidth,
    opacity: 0.5,
  },
});

export default News;
