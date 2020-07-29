import React, { FC, Fragment, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";
import { accountFireStore } from "./firebase/accountFireStore";
import { photoFireStore } from "./firebase/photoFireStore";
import { RootState } from "./reducers/index";
import { lodingStatusChange, loginStatusChange } from "./actions/auth";
import { setUserData } from "./actions/user";
import { setPhotoListData } from "./actions/photo";
import Auth from "./containers/Auth";
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
  Auth: undefined;
  Home: undefined;
  Search: undefined;
  Notification: undefined;
  User: undefined;
  Detail: undefined;
  設定: undefined;
  プロフィール編集: undefined;
  利用規約: undefined;
  プライバシーポリシー: undefined;
};

const Root: FC = () => {
  //ログイン状態とローディング状態をstateから持ってくる
  const selectIsLoding = (state: RootState) => state.authReducer.isLoding;
  const selectIsLogin = (state: RootState) => state.authReducer.isLogin;
  const isLoding = useSelector(selectIsLoding);
  const isLogin = useSelector(selectIsLogin);
  //ルーティング作成
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const dispatch = useDispatch();

  //ログインチェック
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        accountFireStore.getUser(user.uid).then((documentSnapshot) => {
          dispatch(setUserData(documentSnapshot.data()));
        });
        photoFireStore.getPhotoList(user.uid).then((documentSnapshot) => {
          dispatch(setPhotoListData(documentSnapshot.data()));
        });
        dispatch(lodingStatusChange(true));
        dispatch(loginStatusChange(true));
      } else {
        dispatch(loginStatusChange(false));
        dispatch(lodingStatusChange(true));
      }
    });
  }, []);

  //ローディング中の画面を表示
  if (!isLoding) {
    return <LodingScreen />;
  }

  return (
    <NavigationContainer>
      {isLogin && isLoding ? (
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
            name="Auth"
            component={Auth}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Root;
