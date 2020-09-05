import React, { FC, useState } from "react";
import { ScrollView, View, Image, Dimensions } from "react-native";
import { styles } from "../../styles/post";
import { baseColor } from "../../styles/thema/colors";
import EiffelTowerSvg from "../atoms/svg/EiffelTowerSvg";

type Props = {
  uri: string;
};

const Post: FC<Props> = ({ ...props }) => {
  const { uri } = props;
  const [aspectRatio, setAspectRatio] = useState(0);

  Image.getSize(
    uri,
    (width, height) => {
      setAspectRatio(height / width);
    },
    (error) => {
      console.log(error);
    }
  );

  const width = Dimensions.get("window").width;
  const height = width * aspectRatio;
  const viewBoxRatio = 18 / 23;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={{
          width: width,
          height: height,
        }}
        source={{ uri }}
      />
      <View>
        <View
          style={[
            styles.svgWrap,
            {
              aspectRatio: viewBoxRatio,
            },
          ]}
        >
          <EiffelTowerSvg color={baseColor.text} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Post;
