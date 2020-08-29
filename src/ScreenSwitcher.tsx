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
import { setAllPhotoListData } from "./actions/allPhoto";
import { setNoticeListData } from "./actions/notice";
import Intro from "./containers/Intro";
import SignUp from "./containers/organisms/auth/SignUp";
import SignIn from "./containers/organisms/auth/SignIn";
import BottomNav from "./components/organisms/BottomNav";
import TermsOfService from "./components/organisms/TermsOfService";
import PrivacyPolicy from "./components/organisms/PrivacyPolicy";
import PasswordReset from "./components/organisms/PasswordReset";
import LodingScreen from "./components/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import PickUpScreen from "./screens/PickUpScreen";
import NotificationScreen from "./screens/NotificationScreen";
import UserScreen from "./screens/UserScreen";

const ScreenSwitcher: FC = () => {
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
        await accountFireStore.getUser(user.uid).then((res) => {
          dispatch(setUserData(res.data()));
        });
        // await photoFireStore.getAllPhotoList().then((res) => {
        //   dispatch(setAllPhotoListData(res));
        // });
        await photoFireStore.getPhotoList(user.uid).then((res) => {
          dispatch(setPhotoListData(res));
        });
        await noticeFireStore.getNoticeList().then((res) => {
          dispatch(setNoticeListData(res.data()));
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
            <Tab.Screen name="ピックアップ" component={PickUpScreen} />
            <Tab.Screen name="Plus" component={HomeScreen} />
            <Tab.Screen name="通知" component={NotificationScreen} />
            <Tab.Screen name="マイページ" component={UserScreen} />
          </Tab.Navigator>
        </Fragment>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="intro"
            component={Intro}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="signUp"
            component={SignUp}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="signIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="termsOfService"
            component={TermsOfService}
            options={{
              title: "利用規約",
              headerBackTitleVisible: false,
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#181F32",
              },
            }}
          />
          <Stack.Screen
            name="privacyPolicy"
            component={PrivacyPolicy}
            options={{
              title: "プライバシーポリシー",
              headerBackTitleVisible: false,
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#181F32",
              },
            }}
          />
          <Stack.Screen
            name="passwordReset"
            component={PasswordReset}
            options={{
              title: "パスワード再設定",
              headerBackTitleVisible: false,
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#181F32",
              },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default ScreenSwitcher;
