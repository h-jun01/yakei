import React, { FC, Fragment } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { utilityColor } from "../../../styles/thema/colors";
import { Size ,Weights} from "../../../styles/thema/fonts";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const UserInput: FC<Props> = ({ ...props }) => {
  const { label, placeholder, value, setValue } = props;
  return (
    <Fragment>
      {/* インプットの説明 */}
      <Text style={styles.labelItem}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        multiline={true}
        placeholderTextColor={utilityColor.placeholderText}
        onChangeText={(name) => setValue(name)}
        style={styles.editInput}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  //fontWeightを変数指定すると赤線が出る。影響はなし
  labelItem: {
    color: "#fff",
    fontSize: Size.Normal,
    fontWeight: "600",
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 5,
    padding: 10,
  },
  editInput: {
    color: utilityColor.editBox,
    fontSize: Size.Normal,
    fontWeight: "600",
    lineHeight: Size.lineHeight,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: utilityColor.border,
  },
});


export default UserInput;
