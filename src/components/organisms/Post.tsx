import React, { FC } from "react";
import { ScrollView, View, Image, TextInput, Text } from "react-native";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { deviceHeight, deviceWidth } from "../../utilities/dimensions";
import EiffelTowerSvg from "../atoms/svg/EiffelTowerSvg";
import MapTintedSvg from "../atoms/svg/MapButtonTintedSvg";
import KeyboardSpacer from "react-native-keyboard-spacer";
import WhiteWrap from "../../containers/atoms/WhiteWrap";

type Aspect = {
  width: number;
  height: number;
};

type Props = {
  uri: string;
  address: string;
  imageLength: Aspect;
  scrollViewRef: React.MutableRefObject<ScrollView | null>;
  setSpaceHeight: React.Dispatch<React.SetStateAction<number>>;
  handleContentSizeChange: (width: number, height: number) => void;
  photogenicSubject: string;
  setPhotogenicSubject: React.Dispatch<React.SetStateAction<string>>;
  navigation: any;
  shouldShowPreview: boolean;
  setShouldShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  containerAspect: Aspect;
  setContainerAspect: React.Dispatch<React.SetStateAction<Aspect>>;
};

const getPreviewStyle = (
  fullDisplayHeight: number,
  containerAspect: Aspect,
  aspectRatio: number
): { previewImgAspect: Aspect; previewStyle: { wrap: Object } } => {
  if (fullDisplayHeight < containerAspect.height) {
    const previewImgAspect = {
      width: deviceWidth,
      height: fullDisplayHeight,
    };

    const previewStyle = StyleSheet.create({
      wrap: {
        zIndex: 1,
        position: "absolute",
        top: (containerAspect.height - fullDisplayHeight) / 2,
        left: 0,
        backgroundColor: baseColor.base,
      },
    });

    return { previewImgAspect, previewStyle };
  } else {
    const previewImgAspect = {
      width: containerAspect.height / aspectRatio,
      height: containerAspect.height,
    };

    const previewStyle = StyleSheet.create({
      wrap: {
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: (containerAspect.width - previewImgAspect.width) / 2,
        backgroundColor: baseColor.base,
      },
    });

    return { previewImgAspect, previewStyle };
  }
};

const Post: FC<Props> = ({ ...props }) => {
  const {
    uri,
    address,
    imageLength,
    scrollViewRef,
    setSpaceHeight,
    handleContentSizeChange,
    photogenicSubject,
    setPhotogenicSubject,
    navigation,
    shouldShowPreview,
    setShouldShowPreview,
    containerAspect,
    setContainerAspect,
  } = props;

  const addressColorStyle =
    address === "撮影場所を選択"
      ? { color: utilityColor.placeholderText }
      : { color: baseColor.text };

  const aspectRatio = imageLength.height / imageLength.width;
  const fullDisplayHeight = deviceWidth * aspectRatio;
  const { previewImgAspect, previewStyle } = getPreviewStyle(
    fullDisplayHeight,
    containerAspect,
    aspectRatio
  );
  const heightToDisplay =
    fullDisplayHeight < deviceWidth ? fullDisplayHeight : deviceWidth;

  return (
    <>
      {shouldShowPreview ? (
        <>
          <WhiteWrap
            styles={[styles.whiteWrap]}
            onPressOut={() => setShouldShowPreview(false)}
          />
          <TouchableOpacity
            activeOpacity={1.0}
            style={previewStyle.wrap}
            onPressOut={() => setShouldShowPreview(false)}
          >
            <Image
              style={{
                width: previewImgAspect.width,
                height: previewImgAspect.height,
              }}
              source={{ uri }}
            />
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
      <View
        onLayout={(e) =>
          setContainerAspect({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
          })
        }
        style={styles.allContainer}
      >
        <ScrollView
          style={styles.postContainer}
          onContentSizeChange={handleContentSizeChange}
          ref={scrollViewRef}
        >
          <View style={styles.allWrap}>
            <TouchableOpacity onPress={() => setShouldShowPreview(true)}>
              <Image
                style={[
                  { width: deviceWidth, height: heightToDisplay },
                  styles.image,
                ]}
                source={{ uri }}
              />
            </TouchableOpacity>

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
            {Platform.OS !== "android" ? (
              <KeyboardSpacer
                onToggle={(keyboardState, keyboardSpace) => {
                  setSpaceHeight(keyboardSpace);
                }}
              />
            ) : (
              <></>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const eiffelSvgViewBoxRatio = 18 / 23;
const mapSvgViewBoxRatio = 22 / 28;

const styles = StyleSheet.create({
  whiteWrap: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: deviceHeight,
  },
  allContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: baseColor.base,
  },
  postContainer: {
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
