import React, { FC } from "react";
import {
  ScrollView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { styles } from "../../styles/post";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import EiffelTowerSvg from "../atoms/svg/EiffelTowerSvg";
import MapTintedSvg from "../atoms/svg/MapButtonTintedSvg";

type Props = {
  uri: string;
  address: string;
  aspectRatio: number;
  scrollViewRef: React.MutableRefObject<ScrollView | null>;
  setSpaceHeight: React.Dispatch<React.SetStateAction<number>>;
  handleContentSizeChange: (width: number, height: number) => void;
};

const Post: FC<Props> = ({ ...props }) => {
  const {
    uri,
    address,
    aspectRatio,
    scrollViewRef,
    setSpaceHeight,
    handleContentSizeChange,
  } = props;

  const width = Dimensions.get("window").width;
  const height = width * aspectRatio;

  return (
    <ScrollView
      style={styles.container}
      onContentSizeChange={handleContentSizeChange}
      ref={scrollViewRef}
    >
      <View style={styles.allWrap}>
        <Image
          style={[
            {
              width: width,
              height: height,
            },
            styles.image,
          ]}
          source={{ uri }}
        />

        <View style={styles.rowWrap}>
          <View style={[styles.svgWrap, styles.eiffelSvgWrap]}>
            <EiffelTowerSvg color={baseColor.text} />
          </View>
          <TextInput
            style={styles.photgenicSubjectInput}
            placeholder={"被写体を入力（例 : 東京スカイツリー）"}
            autoCapitalize={"none"}
            keyboardType="default"
            returnKeyType="done"
            blurOnSubmit={true}
            editable={true}
            placeholderTextColor={utilityColor.placeholderText}
          />
        </View>

        <View style={styles.rowWrap}>
          <View style={[styles.svgWrap, styles.mapSvgWrap]}>
            <MapTintedSvg color={baseColor.text} />
          </View>
          <TouchableOpacity activeOpacity={1} style={styles.locationTextWrap}>
            <Text style={styles.locationText}>{address}</Text>
          </TouchableOpacity>
        </View>

        <KeyboardSpacer
          onToggle={(keyboardState, keyboardSpace) => {
            setSpaceHeight(keyboardSpace);
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Post;
