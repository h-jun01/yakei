import React, { FC, Fragment, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";
import { RootState } from "./reducers";
import { lodingStatusChange, loginStatusChange } from "./actions/auth";
import Auth from "./containers/Auth";
import LodingScreen from "./componets/LoadingScreen";
import HomeScreen from "./screen/HomeScreen";
import SearchScreen from "./screen/SearchScreen";
import NotificationScreen from "./screen/NotificationScreen";
import UserScreen from "./screen/UserScreen";

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
};

const Root: FC = () => {
  //ログイン状態とローディング状態をstateから持ってくる
  const selectIsLoding = (state: RootState) => state.authReducer.isLoding;
  const selectIsLogin = (state: RootState) => state.authReducer.isLogin;
  //持ってきた情報を格納
  const isLoding = useSelector(selectIsLoding);
  const isLogin = useSelector(selectIsLogin);
  //ルーティング作成
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const dispatch = useDispatch();

  //ログイン済みかチェック
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(lodingStatusChange(true));
        dispatch(loginStatusChange(true));
      } else {
        dispatch(loginStatusChange(false));
        dispatch(lodingStatusChange(true));
      }
    });
  }, []);

  //ローディング中の画面を表示
  //これがないと判定中に地図かログインページが見える
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
