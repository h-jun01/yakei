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
import SignUp from "./containers/organisms/auth/SignUp";
import SignIn from "./containers/organisms/auth/SignIn";
import BottomNav from "./components/organisms/BottomNav";
import TermsOfService from "./components/organisms/user/TermsOfService";
import PrivacyPolicy from "./components/organisms/user/PrivacyPolicy";
import PasswordReset from "./components/organisms/user/PasswordReset";
import LodingScreen from "./components/LoadingScreen";
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
  パスワード再設定: undefined;
  お知らせ: undefined;
  利用規約: undefined;
  プライバシーポリシー: undefined;
};

const Root: FC = () => {
  const selectIsLoading = (state: RootState) => state.authReducer.isLoading;
  const selectIsLogin = (state: RootState) => state.authReducer.isLogin;
  const isLoading = useSelector(selectIsLoading);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

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

  if (!isLoading) {
    return <LodingScreen />;
  }

  return (
    <NavigationContainer>
      {isLogin && isLoading ? (
        <Fragment>
          <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
            <Tab.Screen name="スポット" component={HomeScreen} />
            <Tab.Screen name="ギャラリー" component={SearchScreen} />
            <Tab.Screen name="Plus" component={HomeScreen} />
            <Tab.Screen name="通知" component={NotificationScreen} />
            <Tab.Screen name="マイページ" component={UserScreen} />
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
          <Stack.Screen
            name="パスワード再設定"
            component={PasswordReset}
            options={{
              headerBackTitleVisible: false,
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#141D2C",
              },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Root;
