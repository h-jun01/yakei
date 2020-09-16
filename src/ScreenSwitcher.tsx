import React, { FC, Fragment, useEffect } from "react";
import { Vibration, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase/firebase";
import { accountFireStore } from "./firebase/accountFireStore";
import { photoFireStore } from "./firebase/photoFireStore";
import { newsFireStore } from "./firebase/newsFireStore";
import { RootState } from "./reducers/index";
import { loadingStatusChange, loginStatusChange } from "./actions/auth";
import { setUserData } from "./actions/user";
import { setPhotoListData } from "./actions/photo";
import { setAllPhotoListData } from "./actions/allPhoto";
import { setNewsDataList } from "./actions/news ";
import { setNotificationDataList } from "./actions/notification";
import { Notifications } from "expo";
import { baseColor } from "./styles/thema/colors";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import Intro from "./containers/organisms/Intro";
import SignUp from "./containers/organisms/SignUp";
import SignIn from "./containers/organisms/SignIn";
import BottomNav from "./containers/organisms/BottomNav";
import TermsOfService from "./containers/organisms/TermsOfService";
import PrivacyPolicy from "./containers/organisms/PrivacyPolicy";
import PasswordReset from "./components/organisms/PasswordReset";
import LodingScreen from "./components/organisms/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import PickUpScreen from "./screens/PickUpScreen";
import NotificationScreen from "./screens/NotificationScreen";
import UserScreen from "./screens/UserScreen";
import PostScreen from "./screens/PostScreen";
import { authReducer } from "./reducers/authReducer";

const ScreenSwitcher: FC = () => {
  const selectIsLoading = (state: RootState) => state.authReducer.isLoading;
  const selectIsLogin = (state: RootState) => state.authReducer.isLogin;
  const selectUid = (state: RootState) => state.userReducer.uid;
  const selectAllPhotoDataList = (state: RootState) =>
    state.allPhotoReducer.allPhotoDataList;

  const isLoading = useSelector(selectIsLoading);
  const isLogin = useSelector(selectIsLogin);
  const uid = useSelector(selectUid);
  const allPhotoDataList = useSelector(selectAllPhotoDataList);

  const dispatch = useDispatch();

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const registerForPushNotificationsAsync = async () => {
    // パーミッションを取得
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      // 既に許可されている場合何もしない
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      // 許可されなかった場合何もしない
      if (finalStatus !== "granted") {
        return;
      }
      // トークン生成
      const token = await Notifications.getExpoPushTokenAsync();
      auth.onAuthStateChanged((user) => {
        if (user) {
          accountFireStore.saveDeviceToken(user.uid, token);
        }
      });
    }
    // androidの設定
    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  const _handleNotification = () => {
    Vibration.vibrate(400);
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await accountFireStore.getUser(user.uid).then((res) => {
          dispatch(setUserData(res.data()));
        });
        await photoFireStore.getAllPhotoList().then((res) => {
          dispatch(setAllPhotoListData(res));
        });
        await newsFireStore.getNewsDataList().then((res) => {
          dispatch(setNewsDataList(res.data()));
        });
        dispatch(loadingStatusChange(true));
        dispatch(loginStatusChange(true));
      } else {
        dispatch(loginStatusChange(false));
        dispatch(loadingStatusChange(true));
        dispatch(setNotificationDataList([]));
      }
    });
  }, []);

  useEffect(() => {
    const filter = allPhotoDataList.filter((value) => value.uid === uid);
    dispatch(setPhotoListData(filter));
  }, [allPhotoDataList]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        registerForPushNotificationsAsync();

        // Handle notifications that are received or selected while the app
        // is open. If the app was closed and then opened by tapping the
        // notification (rather than just tapping the app icon to open it),
        // this function will fire on the next tick after the app starts
        // with the notification data.
        Notifications.addListener(_handleNotification);
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
            <Tab.Screen name="投稿" component={PostScreen} />
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
              headerTintColor: baseColor.text,
              headerStyle: {
                backgroundColor: baseColor.darkNavy,
              },
            }}
          />
          <Stack.Screen
            name="privacyPolicy"
            component={PrivacyPolicy}
            options={{
              title: "プライバシーポリシー",
              headerBackTitleVisible: false,
              headerTintColor: baseColor.text,
              headerStyle: {
                backgroundColor: baseColor.darkNavy,
              },
            }}
          />
          <Stack.Screen
            name="passwordReset"
            component={PasswordReset}
            options={{
              title: "パスワード再設定",
              headerBackTitleVisible: false,
              headerTintColor: baseColor.text,
              headerStyle: {
                backgroundColor: baseColor.darkNavy,
              },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default ScreenSwitcher;
