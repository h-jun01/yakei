import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBottomNavStatus } from "../../actions/bottomNav";
import { ScrollView, View, Text } from "react-native";
import { styles } from "../../styles/user/terms";

const PrivacyPolicy: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBottomNavStatus(false));
    return () => {
      dispatch(setBottomNavStatus(true));
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>プライバシーポリシー</Text>
        <Text style={styles.explanation}>
          YAKEI（以下，「当社」といいます。）は，本アプリ上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
        </Text>
      </View>
      {/* 第一条 */}
      <View>
        <Text style={styles.item}>第1条（個人情報）</Text>
        <Text style={styles.contents}>
          「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
        </Text>
      </View>
      {/* 第二条 */}
      <View>
        <Text style={styles.item}>第2条（個人情報の収集方法）</Text>
        <Text style={styles.contents}>
          当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
        </Text>
      </View>
      {/* 第三条 */}
      <View>
        <Text style={styles.item}>第3条（個人情報を収集・利用する目的）</Text>
        <Text style={styles.contents}>
          当社が個人情報を収集・利用する目的は，以下のとおりです。
        </Text>
        <Text style={styles.details}>1.当社サービスの提供・運営のため</Text>
        <Text style={styles.details}>
          2.ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
        </Text>
        <Text style={styles.details}>
          3.ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため
        </Text>
        <Text style={styles.details}>
          4.メンテナンス，重要なお知らせなど必要に応じたご連絡のため
        </Text>
        <Text style={styles.details}>
          5.利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
        </Text>
        <Text style={styles.details}>
          6.ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため
        </Text>
        <Text style={styles.details}>
          7.有料サービスにおいて，ユーザーに利用料金を請求するため
        </Text>
        <Text style={styles.details}>8.上記の利用目的に付随する目的</Text>
      </View>
      {/* 第四條 */}
      <View>
        <Text style={styles.item}>第4条（個人情報の第三者提供）</Text>
        <Text style={styles.contents}>
          当社は，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。
        </Text>
        <Text style={styles.details}>
          1.人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき
        </Text>
        <Text style={styles.details}>
          2.公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき
        </Text>
        <Text style={styles.details}>
          3.国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
        </Text>
        <Text style={styles.details}>
          4.予め次の事項を告知あるいは公表し，かつ当社が個人情報保護委員会に届出をしたとき
        </Text>
        <Text style={styles.details}>・利用目的に第三者への提供を含むこと</Text>
        <Text style={styles.details}>・第三者に提供されるデータの項目</Text>
        <Text style={styles.details}>・第三者への提供の手段または方法</Text>
        <Text style={styles.details}>
          ・本人の求めに応じて個人情報の第三者への提供を停止すること
        </Text>
        <Text style={styles.details}>・本人の求めを受け付ける方法</Text>
      </View>
      {/* 第五条 */}
      <View>
        <Text style={styles.item}>第5条（個人情報の開示）</Text>
        <Text style={styles.contents}>
          1.当社は，本人から個人情報の開示を求められたときは，本人に対し，遅滞なくこれを開示します。ただし，開示することにより次のいずれかに該当する場合は，その全部または一部を開示しないこともあり，開示しない決定をした場合には，その旨を遅滞なく通知します。なお，個人情報の開示に際しては，1件あたり1，000円の手数料を申し受けます。
        </Text>
        <Text style={styles.details}>
          1.本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合
        </Text>
        <Text style={styles.details}>
          2.当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合
        </Text>
        <Text style={styles.details}>3.その他法令に違反することとなる場合</Text>
        <Text style={styles.contents}>
          2.前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。
        </Text>
      </View>
      {/* 第六条 */}
      <View>
        <Text style={styles.item}>第6条（個人情報の訂正および削除）</Text>
        <Text style={styles.contents}>
          1.ユーザーは，当社の保有する自己の個人情報が誤った情報である場合には，当社が定める手続きにより，当社に対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。
        </Text>
        <Text style={styles.contents}>
          2.当社は，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正等を行うものとします。
        </Text>
        <Text style={styles.contents}>
          3.当社は，前項の規定に基づき訂正等を行った場合，または訂正等を行わない旨の決定をしたときは遅滞なく，これをユーザーに通知します。
        </Text>
      </View>
      {/* 第七条 */}
      <View>
        <Text style={styles.item}>第7条（個人情報の利用停止等）</Text>
        <Text style={styles.contents}>
          1.当社は，本人から，個人情報が，利用目的の範囲を超えて取り扱われているという理由，または不正の手段により取得されたものであるという理由により，その利用の停止または消去（以下，「利用停止等」といいます。）を求められた場合には，遅滞なく必要な調査を行います。
        </Text>
        <Text style={styles.contents}>
          2.前項の調査結果に基づき，その請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の利用停止等を行います。
        </Text>
        <Text style={styles.contents}>
          3.当社は，前項の規定に基づき利用停止等を行った場合，または利用停止等を行わない旨の決定をしたときは，遅滞なく，これをユーザーに通知します。
        </Text>
        <Text style={styles.contents}>
          4.前2項にかかわらず，利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって，ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は，この代替策を講じるものとします。
        </Text>
      </View>
      {/* 第八条 */}
      <View>
        <Text style={styles.item}>第8条（プライバシーポリシーの変更）</Text>
        <Text style={styles.contents}>
          1.本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。
        </Text>
        <Text style={styles.contents}>
          2.当社が別途定める場合を除いて，変更後のプライバシーポリシーは，本アプリに掲載したときから効力を生じるものとします。
        </Text>
      </View>
      {/* 第九条 */}
      <View>
        <Text style={styles.item}>第9条（お問い合わせ窓口）</Text>
        <Text style={styles.contents}>
          本ポリシーに関するお問い合わせは，問い合わせフォームからお願致します。
        </Text>
      </View>
      <Text style={styles.fin}>以上</Text>
    </ScrollView>
  );
};

export default PrivacyPolicy;
