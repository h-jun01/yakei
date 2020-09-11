import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import type { Route } from "@react-navigation/routers/lib/typescript/src/types";
import { RootState } from "../../reducers/index";
import { setTabState } from "../../actions/bottomNav";
import { setShouldAppearPostBtns } from "../../actions/cameraAndAlbum";
import { setShouldNavigate } from "../../actions/bottomNav";
import BottomNavTouchableOpacity from "../../components/molecules/BottomNavTouchableOpacity";

type Props = {
  state: BottomTabBarProps["state"];
  route: Route<string>;
  descriptors: BottomTabBarProps["descriptors"];
  navigation: BottomTabBarProps["navigation"];
  index: number;
};

const navigate = (
  navigation: BottomTabBarProps["navigation"],
  dispatch: Dispatch
) => {
  const tab = useSelector((state: RootState) => state.bottomNavReducer.tab);
  const shouldNavigateMap = useSelector(
    (state: RootState) => state.bottomNavReducer.shouldNavigate
  );
  if (!shouldNavigateMap) return;
  navigation.navigate(tab);
  dispatch(setShouldNavigate(false));
};

const BottomNavTouchableOpacityContainer: FC<Props> = ({ ...props }) => {
  const { state, route, descriptors, navigation, index } = props;

  const dispatch = useDispatch();
  const shouldAppearBtns = useSelector(
    (state: RootState) => state.postBtnsReducer.shouldAppear
  );
  const { options } = descriptors[route.key];
  const label = route["name"];
  const isFocused = state.index === index;

  const onPress = () => {
    if (shouldAppearBtns) {
      dispatch(setShouldAppearPostBtns(false));
      return;
    }
    dispatch(setTabState(route["name"]));
    const event = navigation.emit({
      type: "tabPress",
      target: route["key"],
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route["name"]);
    }
  };

  const onLongPress = () => {
    navigation.emit({
      type: "tabLongPress",
      target: route["key"],
    });
  };

  navigate(navigation, dispatch);

  return (
    <BottomNavTouchableOpacity
      index={index}
      isFocused={isFocused}
      options={options}
      onPress={onPress}
      onLongPress={onLongPress}
      label={label}
    />
  );
};

export default BottomNavTouchableOpacityContainer;
