import React, { FC, RefObject } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { deviceWidth } from "../../utilities/dimensions";
import { Size } from "../../styles/thema/fonts";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import FaqHeading from "../atoms/FaqHeading";

type Props = {
  yAxis: number;
  scrollViewRef: RefObject<ScrollView>;
  _handleOpenWithLinking: () => void;
  bottomHeight: number;
};

const Faq: FC<Props> = ({ ...props }) => {
  const { yAxis, scrollViewRef, _handleOpenWithLinking, bottomHeight } = props;

  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current!.scrollTo({ x: 0, y: yAxis, animated: false })
      }
    >
      <View style={[styles.container, { paddingBottom: bottomHeight }]}>
        {/* 1 */}
        <View style={styles.wrapper}>
          <FaqHeading heading="登録しているメールアドレスを変更したい" />
          <Text style={styles.text}>
            現在の仕様上、登録されたメールアドレスの変更はできません。今後のアップデートでの実装を予定しています。
            {"\n"}
          </Text>
          <Text style={styles.text}>
            ご不便をおかけして、大変申し訳ございません。
          </Text>
        </View>
        <View style={styles.border} />
        {/* 2 */}
        <View style={styles.wrapper}>
          <FaqHeading heading="登録しているパスワードを変更したい" />
          <Text style={styles.text}>
            1.{"\u3000"}「マイページ&gt;設定」を選択 {"\n"}
          </Text>
          <Text style={styles.text}>
            2.{"\u3000"}「パスワード再設定」を選択 {"\n"}
          </Text>
          <Text style={styles.text}>
            3.{"\u3000"}YAKEIに登録したメールアドレスを入力し、{"\n"}
            {"\u3000"}
            {"\u3000"}「パスワード設定リンクを送信」ボタンを選択 {"\n"}
          </Text>
          <Text style={styles.text}>
            4.{"\u3000"}確認メールが届くので、メール内のURLにアクセス
          </Text>
        </View>
        <View style={styles.border} />
        {/* 3 */}
        <View style={styles.wrapper}>
          <FaqHeading heading="パスワード変更時にメールが届きません" />
          <Text style={styles.text}>
            メールが届かない場合は、以下についてご確認いただいた上で、時間を空けてから再度お試しください。
          </Text>
          <View style={styles.garybox}>
            <Text style={styles.text}>・ Wi-Fiの電波状況をご確認ください</Text>
            <Text style={styles.text}>
              ・ メールアドレスが正しいかご確認ください
            </Text>
            <Text style={styles.text}>・ 迷惑メール設定をご確認ください</Text>
          </View>
        </View>
        <View style={styles.border} />
        {/* ４ */}
        <View style={styles.wrapper}>
          <FaqHeading heading="YAKEIを退会したい" />
          <Text style={styles.text}>
            件名を【退会申請】とした上で{" "}
            <Text style={styles.mail} onPress={() => _handleOpenWithLinking()}>
              こちら
            </Text>
            にメールを送信してください。退会申請を確認後、順次、退会処理をさせていただきます。
            {"\n"}
          </Text>
          <Text style={styles.text}>
            なお、送信元のメールアドレスはYAKEIに登録しているご自身のメールアドレスから送信してください。
          </Text>
        </View>
        <View style={styles.border} />
        {/* 5 */}
        <View style={styles.wrapper}>
          <FaqHeading heading="投稿写真を保存するにはどのようにすればいいですか？" />
          <Text style={styles.text}>
            YAKEIでは投稿された写真を保存することはできません。
            当アプリ内での閲覧をお楽しみください。 {"\n"}
          </Text>
          <Text style={styles.text}>
            また、ご投稿いただいた画像の取り扱いにあたり、著作権及び著作隣接権、肖像権などの権利関係に関して第三者との間において生じた、取引や紛争等について当社は一切の責任を負いません。
          </Text>
        </View>
        <View style={styles.border} />
        {/* 6 */}
        <View style={styles.wrapper}>
          <FaqHeading heading="スポットとはなんですか？" />
          <Text style={styles.text}>
            スポットは投稿された写真の撮影された場所がマップ上にピンで表示されるページです。{" "}
            {"\n"}
          </Text>
          <Text style={styles.text}>
            自身のみや全ユーザーで投稿した画像のピン情報を切り替えて表示したり、マップ上からお気に入りの投稿を探すなどの楽しみ方ができます。
          </Text>
        </View>
        <View style={styles.border} />
        {/* 7 */}
        <View style={styles.wrapper}>
          <FaqHeading heading="ピックアップとはなんですか？" />
          <Text style={styles.text}>
            ピックアップはYAKEIの運営者が投稿された画像の中でジャンル別や撮影対象別などに投稿された写真を文字通り『ピックアップ』して、アルバムのようにまとめたページです。
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: deviceWidth / 1.1,
    marginLeft: 15,
  },
  border: {
    width: deviceWidth,
    borderBottomWidth: 0.5,
    borderBottomColor: "#808080",
    marginTop: 25,
  },
  garybox: {
    backgroundColor: "#dcdcdc",
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  mail: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    color: "#1D89C6",
  },
  text: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
  },
});

export default Faq;
