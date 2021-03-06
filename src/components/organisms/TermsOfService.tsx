import React, { FC } from "react";
import { Platform, PlatformIOSStatic } from "react-native";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Size } from "../../styles/thema/fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

type Props = {
  _handleOpenWithLinking: () => void;
};

const TermsOfService: FC<Props> = ({ _handleOpenWithLinking }) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>YAKEI利用規約</Text>
        <Text style={styles.explanation}>
          この利用規約（以下，「本規約」といいます。）は，
          YAKEI（以下，「当社」といいます。）が提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
        </Text>
      </View>
      {/* 第一条 */}
      <View>
        <Text style={styles.item}>第1条（適用）</Text>
        <Text style={styles.contents}>
          1.本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
        </Text>
        <Text style={styles.contents}>
          2.当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
        </Text>
        <Text style={styles.contents}>
          3.本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
        </Text>
      </View>
      {/* 第二条 */}
      <View>
        <Text style={styles.item}>第2条（利用登録）</Text>
        <Text style={styles.contents}>
          1.サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。
        </Text>
        <Text style={styles.contents}>
          2.当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
        </Text>
        <Text style={styles.details}>
          ・利用登録の申請に際して虚偽の事項を届け出た場合
        </Text>
        <Text style={styles.details}>
          ・規約に違反したことがある者からの申請である場合
        </Text>
        <Text style={styles.details}>
          ・その他，当社が利用登録を相当でないと判断した場合
        </Text>
      </View>
      {/* 第三条 */}
      <View>
        <Text style={styles.item}>
          第3条（メールアドレスおよびパスワードの管理）
        </Text>
        <Text style={styles.contents}>
          1.ユーザーは，自己の責任において，本サービスのメールアドレスおよびパスワードを適切に管理するものとします。
        </Text>
        <Text style={styles.contents}>
          2.ユーザーは，いかなる場合にも，メールアドレスおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当社は，メールアドレスとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのメールアドレスを登録しているユーザー自身による利用とみなします。
        </Text>
        <Text style={styles.contents}>
          3.メールアドレス及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。
        </Text>
      </View>
      {/* 第四條 */}
      <View>
        <Text style={styles.item}>第4条（利用料金および支払方法）</Text>
        <Text style={styles.contents}>
          1.ユーザーは，本サービスの有料部分の対価として，当社が別途定め，本アプリに表示する利用料金を，当社が指定する方法により支払うものとします。
        </Text>
        <Text style={styles.contents}>
          2.ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。
        </Text>
      </View>
      {/* 第五条 */}
      <View>
        <Text style={styles.item}>第5条（禁止事項）</Text>
        <Text style={styles.contents}>
          ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
        </Text>
        <Text style={styles.details}>1.法令または公序良俗に違反する行為</Text>
        <Text style={styles.details}>2.犯罪行為に関連する行為</Text>
        <Text style={styles.details}>
          3.本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
        </Text>
        <Text style={styles.details}>
          4.当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
        </Text>
        <Text style={styles.details}>
          5.本サービスによって得られた情報を商業的に利用する行為
        </Text>
        <Text style={styles.details}>
          6.当社のサービスの運営を妨害するおそれのある行為
        </Text>
        <Text style={styles.details}>
          7.不正アクセスをし，またはこれを試みる行為
        </Text>
        <Text style={styles.details}>
          8.他のユーザーに関する個人情報等を収集または蓄積する行為
        </Text>
        <Text style={styles.details}>
          9.不正な目的を持って本サービスを利用する行為
        </Text>
        <Text style={styles.details}>
          10.本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
        </Text>
        <Text style={styles.details}>11.他のユーザーに成りすます行為</Text>
        <Text style={styles.details}>
          12.当社が許諾しない本サービス上での宣伝，広告，勧誘，または営業行為
        </Text>
        <Text style={styles.details}>
          13.面識のない異性との出会いを目的とした行為
        </Text>
        <Text style={styles.details}>
          14.当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
        </Text>
        <Text style={styles.details}>
          15.その他，当社が不適切と判断する行為
        </Text>
      </View>
      {/* 第六条 */}
      <View>
        <Text style={styles.item}>第6条（本サービスの提供の停止等）</Text>
        <Text style={styles.contents}>
          1.当社は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
        </Text>
        <Text style={styles.details}>
          1.サービスにかかるコンピュータシステムの保守点検または更新を行う場合
        </Text>
        <Text style={styles.details}>
          2.地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
        </Text>
        <Text style={styles.details}>
          3.コンピュータまたは通信回線等が事故により停止した場合
        </Text>
        <Text style={styles.details}>
          4.その他，当社が本サービスの提供が困難と判断した場合
        </Text>
        <Text style={styles.contents}>
          2.当社は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
        </Text>
      </View>
      {/* 第七条 */}
      <View>
        <Text style={styles.item}>第7条（利用制限および登録抹消）</Text>
        <Text style={styles.contents}>
          1.当社は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限し，またはユーザーとしての登録を抹消することができるものとします。
        </Text>
        <Text style={styles.details}>
          1.本規約のいずれかの条項に違反した場合
        </Text>
        <Text style={styles.details}>
          2.登録事項に虚偽の事実があることが判明した場合
        </Text>
        <Text style={styles.details}>金等の支払債務の不履行があった場合</Text>
        <Text style={styles.details}>
          3.当社からの連絡に対し，一定期間返答がない場合
        </Text>
        <Text style={styles.details}>
          4.本サービスについて，最終の利用から一定期間利用がない場合
        </Text>
        <Text style={styles.details}>
          5.その他，当社が本サービスの利用を適当でないと判断した場合
        </Text>
        <Text style={styles.contents}>
          2.当社は，本条に基づき当社が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
        </Text>
      </View>
      {/* 第八条 */}
      <View>
        <Text style={styles.item}>第8条（退会）</Text>
        <Text style={styles.contents}>
          ユーザーは，当社の定める退会手続により，本サービスから退会できるものとします。
        </Text>
      </View>
      {/* 第九条 */}
      <View>
        <Text style={styles.item}>第9条（保証の否認および免責事項）</Text>
        <Text style={styles.contents}>
          1.当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
        </Text>
        <Text style={styles.contents}>
          2.当社は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
        </Text>
        <Text style={styles.contents}>
          3.前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
        </Text>
        <Text style={styles.contents}>
          4.当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
        </Text>
      </View>
      {/* 第十条 */}
      <View>
        <Text style={styles.item}>第10条（サービス内容の変更等）</Text>
        <Text style={styles.contents}>
          当社は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
        </Text>
      </View>
      {/* 第十一条 */}
      <View>
        <Text style={styles.item}>第11条（利用規約の変更）</Text>
        <Text style={styles.contents}>
          当社は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
        </Text>
      </View>
      {/* 第十二条 */}
      <View>
        <Text style={styles.item}>第12条（個人情報の取扱い）</Text>
        <Text style={styles.contents}>
          当社は，本サービスの利用によって取得する個人情報については，当社「プライバシーポリシー」に従い適切に取り扱うものとします。
        </Text>
      </View>
      {/* 第十三条 */}
      <View>
        <Text style={styles.item}>第13条（通知または連絡）</Text>
        <Text style={styles.contents}>
          ユーザーと当社との間の通知または連絡は，当社の定める方法によって行うものとします。当社は,ユーザーから,当社が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
        </Text>
      </View>
      {/* 第十四条 */}
      <View>
        <Text style={styles.item}>第14条（権利義務の譲渡の禁止）</Text>
        <Text style={styles.contents}>
          ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
        </Text>
      </View>
      {/* 第十五条 */}
      <View>
        <Text style={styles.item}>第15条（準拠法・裁判管轄）</Text>
        <Text style={styles.contents}>
          1.本規約の解釈にあたっては，日本法を準拠法とします。
        </Text>
        <Text style={styles.contents}>
          2.本サービスに関して紛争が生じた場合には，当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
        </Text>
      </View>
      {/* 第十六条 */}
      <View>
        <Text style={styles.item}>第16条（お問い合わせ窓口）</Text>
        <Text style={styles.contents}>
          本利用規約に関するお問い合わせは，
          <Text style={styles.mail} onPress={() => _handleOpenWithLinking()}>
            こちら
          </Text>
          からお願致します。
        </Text>
      </View>
      <Text style={styles.fin}>以上</Text>
    </ScrollView>
  );
};

const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
  },
  title: {
    fontSize: platformIOS.isPad ? Size.Large : Size.Xxlarge,
    fontWeight: "600",
    paddingTop: 15,
    paddingBottom: 15,
  },
  explanation: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    lineHeight: platformIOS.isPad ? hp("2.2%") : 15,
    letterSpacing: 0.5,
  },
  item: {
    fontSize: platformIOS.isPad ? Size.NormalL : Size.Xlarge,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
  },
  contents: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    marginTop: 5,
    marginBottom: 5,
    lineHeight: platformIOS.isPad ? hp("2.2%") : 15,
    letterSpacing: 0.5,
  },
  details: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    marginLeft: 10,
    marginBottom: 5,
    lineHeight: platformIOS.isPad ? hp("2.2%") : 15,
    letterSpacing: 0.5,
  },
  mail: {
    color: "#1D89C6",
  },
  fin: {
    fontSize: platformIOS.isPad ? Size.Xsmall : Size.Normal,
    textAlign: "right",
    paddingTop: 20,
    paddingBottom: 15,
  },
});

export default TermsOfService;
