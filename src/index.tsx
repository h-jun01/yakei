import React, { FC, Fragment, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";
import { accountFireStore } from "./firebase/accountFireStore";
import { photoFireStore } from "./firebase/photoFireStore";
import { noticeFireStore } from "./firebase/noticeFireStore";
import { RootState } from "./reducers/index";
import { loadingStatusChange, loginStatusChange } from "./actions/auth";
import { setUserData } from "./actions/user";
import { setPhotoListData } from "./actions/photo";
import { setNoticeListData } from "./actions/notice";
import Intro from "./containers/Intro";
import SignUp from "./containers/organisms/SignUp";
import SignIn from "./containers/organisms/SignIn";
import TermsOfService from "./componets/organisms/user/TermsOfService";
import PrivacyPolicy from "./componets/organisms/user/PrivacyPolicy";
import LodingScreen from "./componets/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import NotificationScreen from "./screens/NotificationScreen";
import UserScreen from "./screens/UserScreen";

export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  User: undefined;
};

export type StackParamList = {
  新規登録: undefined;
  ログイン: undefined;
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  User: undefined;
  Detail: undefined;
  設定: undefined;
  プロフィール編集: undefined;
  お知らせ: undefined;
  利用規約: undefined;
  プライバシーポリシー: undefined;
};

const Root: FC = () => {
  //ログイン状態とローディング状態をstateから持ってくる
  const selectIsLoading = (state: RootState) => state.authReducer.isLoading;
  const selectIsLogin = (state: RootState) => state.authReducer.isLogin;
  const selectUid = (state: RootState) => state.userReducer.uid;
  const isLoading = useSelector(selectIsLoading);
  const isLogin = useSelector(selectIsLogin);
  const uid = useSelector(selectUid);
  //ルーティング作成
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const dispatch = useDispatch();

  //ログインチェック
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await accountFireStore.getUser(user.uid).then((documentSnapshot) => {
          dispatch(setUserData(documentSnapshot.data()));
        });
        await photoFireStore.getPhotoList(user.uid).then((documentSnapshot) => {
          dispatch(setPhotoListData(documentSnapshot.data()));
        });
        await noticeFireStore.getNoticeList().then((documentSnapshot) => {
          dispatch(setNoticeListData(documentSnapshot.data()));
        });
        dispatch(loadingStatusChange(true));
        dispatch(loginStatusChange(true));
      } else {
        dispatch(loginStatusChange(false));
        dispatch(loadingStatusChange(true));
      }
    });
  }, []);

  //ローディング中の画面を表示
  if (!isLoading) {
    return <LodingScreen />;
  }

  return (
    <NavigationContainer>
      {isLogin && isLoading ? (
        <Fragment>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Notification" component={NotificationScreen} />
            <Tab.Screen name="User" component={UserScreen} />
          </Tab.Navigator>
        </Fragment>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="イントロ"
            component={Intro}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="新規登録"
            component={SignUp}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="ログイン"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="利用規約"
            component={TermsOfService}
            options={{ headerBackTitleVisible: false }}
          />
          <Stack.Screen
            name="プライバシーポリシー"
            component={PrivacyPolicy}
            options={{ headerBackTitleVisible: false }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Root;
