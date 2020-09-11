import React, { FC } from "react";
import {
  ScrollView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { deviceWidth } from "../../utilities/dimensions";
import EiffelTowerSvg from "../atoms/svg/EiffelTowerSvg";
import MapTintedSvg from "../atoms/svg/MapButtonTintedSvg";
import KeyboardSpacer from "react-native-keyboard-spacer";

type Props = {
  uri: string;
  address: string;
  aspectRatio: number;
  scrollViewRef: React.MutableRefObject<ScrollView | null>;
  setSpaceHeight: React.Dispatch<React.SetStateAction<number>>;
  handleContentSizeChange: (width: number, height: number) => void;
  photogenicSubject: string;
  setPhotogenicSubject: React.Dispatch<React.SetStateAction<string>>;
  onPressLocationRow: () => void;
  navigation: any;
};

const Post: FC<Props> = ({ ...props }) => {
  const {
    uri,
    address,
    aspectRatio,
    scrollViewRef,
    setSpaceHeight,
    handleContentSizeChange,
    photogenicSubject,
    setPhotogenicSubject,
    onPressLocationRow,
    navigation,
  } = props;

  const width = deviceWidth;
  const height = width * aspectRatio;
  const addressColorStyle =
    address === "撮影場所を選択"
      ? { color: utilityColor.placeholderText }
      : { color: baseColor.text };

  return (
    <ScrollView
      style={styles.container}
      onContentSizeChange={handleContentSizeChange}
      ref={scrollViewRef}
    >
      <View style={styles.allWrap}>
        <Image
          style={[{ width: width, height: width }, styles.image]}
          source={{ uri }}
        />

        <View style={styles.rowWrap}>
          <View style={[styles.svgWrap, styles.eiffelSvgWrap]}>
            <EiffelTowerSvg color={baseColor.text} />
          </View>
          <TextInput
            style={styles.photgenicSubjectInput}
            placeholder={"被写体を入力（例 : 東京スカイツリー）"}
            value={photogenicSubject}
            onChangeText={(text) => setPhotogenicSubject(text)}
            maxLength={25}
            multiline={true}
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
          <TouchableOpacity
            activeOpacity={1}
            style={styles.locationTextWrap}
            onPress={() => navigation.navigate("postedMap")}
          >
            <Text style={[styles.locationText, addressColorStyle]}>
              {address}
            </Text>
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

const eiffelSvgViewBoxRatio = 18 / 23;
const mapSvgViewBoxRatio = 22 / 28;

const styles = StyleSheet.create({
  container: {
    height: hp("100%"),
    backgroundColor: baseColor.base,
  },
  allWrap: {
    flexDirection: "column",
    alignItems: "center",
    width: wp("100%"),
  },
  image: {
    marginBottom: wp("1%"),
  },
  rowWrap: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: wp("1.6%"),
    paddingHorizontal: "5%",
    borderBottomWidth: 0.5,
    borderBottomColor: utilityColor.postInputBorder,
  },
  svgWrap: {
    width: Size.Xxlarge,
    marginRight: wp("5%"),
  },
  eiffelSvgWrap: {
    aspectRatio: eiffelSvgViewBoxRatio,
  },
  mapSvgWrap: {
    aspectRatio: mapSvgViewBoxRatio,
  },
  photgenicSubjectInput: {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexWrap: "wrap",
    width: wp("80%"),
    marginVertical: hp("1.25%"),
    marginHorizontal: wp("2%"),
    fontSize: Size.NormalL,
    color: baseColor.text,
  },
  locationTextWrap: {
    flexDirection: "row",
    flexGrow: 1,
    flexWrap: "wrap",
    marginVertical: hp("1.25%"),
    paddingHorizontal: wp("2%"),
  },
  locationText: {
    width: wp("80%"),
    fontSize: Size.NormalL,
  },
});

export default Post;
