import React, { FC, useState } from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import { styles } from "../../styles/post";

type Props = {
  uri: string;
  type: string;
};

const Post: FC<Props> = ({ ...props }) => {
  const { uri, type } = props;
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

  return (
    <ScrollView style={styles.container}>
      <Image
        style={{
          width: width,
          height: height,
        }}
        source={{ uri }}
      />
    </ScrollView>
  );
};

export default Post;
