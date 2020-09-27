// import React, { FC } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   Platform,
//   PlatformIOSStatic,
// } from "react-native";
// import { Timestamp } from "@google-cloud/firestore";
// import { deviceWidth } from "../../utilities/dimensions";
// import { baseColor } from "../../styles/thema/colors";
// import { AdMobBanner } from "expo-ads-admob";

// const CARD_HEIGHT = 220;
// const CARD_WIDTH = deviceWidth * 0.8;
// const bannerError = () => {
//   console.log("Ad Fail error");
// };
// const AdModCard: FC = () => {
//   return (
//     <View style={styles.card}>
//       <AdMobBanner
//         adUnitID={
//           __DEV__
//             ? "ca-app-pub-3940256099942544/6300978111" // テスト広告
//             : Platform.select({
//                 ios: "広告ユニットID", // iOS
//                 android: "広告ユニットID", // android
//               })
//         }
//         onDidFailToReceiveAdWithError={bannerError}
//         servePersonalizedAds
//         bannerSize="mediumRectangle"
//         // 'banner' | 'largeBanner' | 'mediumRectangle' | 'fullBanner' | 'leaderboard' | 'smartBannerPortrait' | 'smartBannerLandscape';
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     alignItems: "center",
//     elevation: 2,
//     backgroundColor: baseColor.darkNavy,
//     borderColor: "rgba(170, 170, 170, 0.6)",
//     borderWidth: 0.5,
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5,
//     borderBottomLeftRadius: 5,
//     borderBottomRightRadius: 5,
//     marginHorizontal: 10,
//     shadowColor: "#000",
//     shadowRadius: 5,
//     shadowOpacity: 0.3,
//     height: CARD_HEIGHT - 50,
//     width: CARD_WIDTH,
//     overflow: "hidden",
//   },
// });

// export default AdModCard;
