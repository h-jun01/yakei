import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Size } from "../../styles/thema/fonts";
import HelpHeading from "../atoms/HelpHeading";

type Props = {
  navigation: any;
  bottomHeight: number;
};

const Help: FC<Props> = ({ navigation, bottomHeight }) => {
  return (
    <View style={[styles.container, { paddingBottom: bottomHeight }]}>
      <HelpHeading heading="注意事項" />
      <Text style={styles.considerationsText}>
        ・他人の写真をYAKEIに投稿してはいけません。
      </Text>
      <Text style={styles.considerationsText}>
        ・掲載されている他人の作品をブログやサイト等に{"\n"}
        {"\u3000"}無断で転載してはいけません。
      </Text>
      <Text style={styles.considerationsText}>
        ・無差別な商業用の宣伝行為をしてはいけません。
      </Text>
      <Text style={styles.considerationsText}>
        ・他の利用者に対して誹謗・中傷・プライバシーの{"\n"}
        {"\u3000"}侵害をしてはいけません。
      </Text>
      <HelpHeading heading="よくある質問" />
      <Text
        style={styles.questionText}
        onPress={() =>
          navigation.navigate("faq", {
            yAxis: 0,
          })
        }
      >
        登録しているメールアドレスを変更したい
      </Text>
      <Text
        style={styles.questionText}
        onPress={() =>
          navigation.navigate("faq", {
            yAxis: 120,
          })
        }
      >
        登録しているパスワードを変更したい
      </Text>
      <Text
        style={styles.questionText}
        onPress={() =>
          navigation.navigate("faq", {
            yAxis: 320,
          })
        }
      >
        パスワード変更時にメールが届きません
      </Text>
      <Text
        style={styles.questionText}
        onPress={() =>
          navigation.navigate("faq", {
            yAxis: 700,
          })
        }
      >
        YAKEIを退会したい
      </Text>
      <Text
        style={styles.questionText}
        onPress={() =>
          navigation.navigate("faq", {
            yAxis: 700,
          })
        }
      >
        投稿写真を保存するにはどのようにすればいいですか？
      </Text>
      <Text
        style={styles.questionText}
        onPress={() =>
          navigation.navigate("faq", {
            yAxis: 700,
          })
        }
      >
        スポットとはなんですか？
      </Text>
      <Text
        style={styles.questionText}
        onPress={() =>
          navigation.navigate("faq", {
            yAxis: 700,
          })
        }
      >
        ピックアップとはなんですか？
      </Text>
    </View>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  considerationsText: {
    width: deviceWidth / 1.2,
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    marginBottom: hp("1.6%"),
  },
  questionText: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    color: "#1D89C6",
    width: deviceWidth / 1.2,
    marginBottom: hp("1.6%"),
  },
});

export default Help;
