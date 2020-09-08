import React, { FC } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import FaqHeading from "../atoms/FaqHeading";

const Faq: FC = () => {
  return (
    <ScrollView>
      <View>
        <FaqHeading heading="登録しているメールアドレスを変更したい" />
        <Text>
          現在の仕様上、登録されたメールアドレスの変更はできません。今後のアップデートでの実装を予定しています。
        </Text>
        <Text>ご不便をおかけして、大変申し訳ございません。</Text>
        <FaqHeading heading="登録しているパスワードを変更したい" />
        <Text>1.{"\u3000"}「マイページ&gt;設定」を選択</Text>
        <Text>2.{"\u3000"}「パスワード再設定」を選択</Text>
        <Text>
          3.{"\u3000"}YAKEIに登録したメールアドレスを入力し、{"\n"}
          {"\u3000"}
          {"\u3000"}「パスワード設定リンクを送信」ボタンを選択
        </Text>
        <Text>4.{"\u3000"}確認メールが届くので、メール内のURLにアクセス</Text>
        <FaqHeading heading="パスワード変更時にメールが届きません" />
        <Text>
          メールが届かない場合は、以下についてご確認いただいた上で、時間を空けてから再度お試しください。
        </Text>
        <View>
          <Text>・ Wi-Fiの電波状況をご確認ください</Text>
          <Text>・ メールアドレスが正しいかご確認ください</Text>
          <Text>・ 迷惑メール設定をご確認ください</Text>
        </View>
        <Text>
          なお、変更が確認できない場合はこちらよりお問い合わせください。
        </Text>
        <FaqHeading heading="YAKEIを退会したい" />
        <Text>
          お問い合わせフォームからYAKEI運営宛てのGmailアドレスに、件名を【退会申請】とした上で空メールを送信してください。退会申請を確認後、順次、退会処理をさせていただきます。
        </Text>
        <Text>
          なお、送信元のメールアドレスはYAKEIに登録しているご自身のメールアドレスから送信してください。
        </Text>
        <FaqHeading heading="投稿写真を保存するにはどのようにすればいいですか？" />
        <Text>
          YAKEIでは投稿された写真を保存することはできません。
          当アプリ内での閲覧をお楽しみください。
        </Text>
        <Text>
          また、ご投稿いただいた画像の取り扱いにあたり、著作権及び著作隣接権、肖像権などの権利関係に関して第三者との間において生じた、取引や紛争等について当社は一切の責任を負いません。
        </Text>
        <FaqHeading heading="スポットとはなんですか？" />
        <Text>
          スポットは投稿された写真の撮影された場所がマップ上にピンで表示されるページです。
        </Text>
        <Text>
          自身のみや全ユーザーで投稿した画像のピン情報を切り替えて表示したり、マップ上からお気に入りの投稿を探すなどの楽しみ方ができます。
        </Text>
        <FaqHeading heading="ピックアップとはなんですか？" />
        <Text>
          ピックアップはYAKEIの運営者が投稿された画像の中でジャンル別や撮影対象別などに投稿された写真を文字通り『ピックアップ』して、アルバムのようにまとめたページです。
        </Text>
      </View>
    </ScrollView>
  );
};

export default Faq;
