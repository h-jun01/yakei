import React, { FC } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { View, Text } from "react-native";
import { deviceHeight } from "../utilities/dimensions";

type Props = {
  navigation: any;
};

const Intro: FC<Props> = ({ navigation }) => {
  const slides = [
    {
      key: "1",
      title: "Title 1",
      text: "Description.\nSay something cool",
      // image: require('./assets/1.jpg'),
      backgroundColor: "#59b2ab",
    },
    {
      key: "2",
      title: "Title 2",
      text: "Other cool stuff",
      // image: require('./assets/2.jpg'),
      backgroundColor: "#febe29",
    },
    {
      key: "3",
      title: "Rocket guy",
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      // image: require('./assets/3.jpg'),
      backgroundColor: "#22bcb5",
    },
  ];

  const _renderItem = ({ item }) => {
    return (
      <View
        style={{ backgroundColor: item.backgroundColor, height: deviceHeight }}
      >
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={() => navigation.navigate("新規登録")}
    />
  );
};

export default Intro;
