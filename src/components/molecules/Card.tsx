import React, { FC } from "react";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Timestamp } from "@google-cloud/firestore";
import { deviceWidth } from "../../utilities/dimensions";
import { baseColor } from "../../styles/thema/colors";

type PhotoDataList = {
  photo_id: string;
  uid: string;
  create_time: Timestamp;
  url: string;
  latitude: number;
  longitude: number;
  photogenic_subject: string;
};

type Props = {
  navigation: any;
  data: PhotoDataList;
  postUserName: string;
  aspectRatio: number;
};

const CARD_HEIGHT = 220;
const CARD_WIDTH = deviceWidth * 0.8;

const Card: FC<Props> = ({ ...props }) => {
  const { navigation, data, postUserName, aspectRatio } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={() => {
        const photoDataList: PhotoDataList[] = [];
        photoDataList.push(data);
        navigation.navigate("post", {
          imageData: {
            photo_id: data.photo_id,
            uid: data.uid,
            create_time: data.create_time,
            url: data.url,
            latitude: data.latitude,
            longitude: data.longitude,
            photogenic_subject: data.photogenic_subject,
            aspectRatio,
          },
        });
      }}
      key={data.photo_id}
      style={styles.card}
    >
      <Image
        source={{
          uri: data.url,
        }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <Text style={styles.cardText}>
        {/* {data.photogenic_subject} */}
        {postUserName}
        <Text style={styles.cardTextSub}>さんの投稿</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 2,
    backgroundColor: baseColor.darkNavy,
    borderColor: "rgba(170, 170, 170, 0.6)",
    borderWidth: 0.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    height: CARD_HEIGHT - 50,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "80%",
    alignSelf: "center",
  },
  cardText: {
    fontSize: 17,
    color: baseColor.text,
    fontWeight: "bold",
    padding: 15,
  },
  cardTextSub: {
    fontWeight: "normal",
  },
});

export default Card;
