import React, { FC, Fragment } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { baseColor, utilityColor } from "../../styles/thema/colors";
import { Size } from "../../styles/thema/fonts";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

type Aspect = {
  width: number;
  height: number;
};

type Props = {
  label: string;
  placeholder: string;
  value: string;
  maxLength: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  aspect: Aspect;
  setAspect: React.Dispatch<React.SetStateAction<Aspect>>;
  onPress: () => void;
  onBlur: () => void;
  onFocus: () => void;
  textInputRef: React.RefObject<TextInput>;
  isCoveredBtn: boolean;
};

const UserInput: FC<Props> = ({ ...props }) => {
  const {
    label,
    placeholder,
    value,
    maxLength,
    setValue,
    aspect,
    setAspect,
    onPress,
    onBlur,
    onFocus,
    textInputRef,
    isCoveredBtn,
  } = props;
  return (
    <Fragment>
      {/* インプットの説明 */}
      <Text style={styles.labelItem}>{label}</Text>
      {isCoveredBtn ? (
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => onPress()}
          style={[
            {
              zIndex: 1,
              width: aspect.width,
              height: aspect.height,
            },
          ]}
        />
      ) : (
        <></>
      )}
      <TextInput
        ref={textInputRef}
        value={value}
        placeholder={placeholder}
        keyboardType="default"
        returnKeyType="done"
        multiline={true}
        blurOnSubmit={true}
        editable={true}
        maxLength={maxLength}
        placeholderTextColor={utilityColor.placeholderText}
        onLayout={(e) => {
          setAspect({
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height,
          });
        }}
        onChangeText={(name) => setValue(name)}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        style={[
          styles.editInput,
          isCoveredBtn ? { marginTop: -aspect.height } : {},
        ]}
      />
    </Fragment>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  labelItem: {
    color: baseColor.text,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    fontWeight: "600",
    marginBottom: platformIOS.isPad ? wp("1%") : wp("1.5%"),
    marginTop: platformIOS.isPad ? wp("1.5%") : 0,
    paddingLeft: wp("3%"),
    borderBottomWidth: 1,
    borderColor: utilityColor.border,
  },
  editInput: {
    color: utilityColor.editBox,
    fontSize: platformIOS.isPad ? Size.Normal : Size.Large,
    fontWeight: "600",
    lineHeight: Size.lineHeight,
    paddingBottom: wp("3%"),
    paddingLeft: wp("3%"),
    paddingRight: wp("5%"),
    borderBottomWidth: 1,
    borderColor: utilityColor.border,
  },
});

export default UserInput;
