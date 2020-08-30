import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import type { Route } from "@react-navigation/routers/lib/typescript/src/types";
import { RootState } from "../../reducers/index";
import { setCameraAndAlbumStatus } from "../../actions/cameraAndAlbum";
import BottomNavTouchableOpacity from "../../components/molecules/BottomNavTouchableOpacity";

type Props = {
  state: BottomTabBarProps["state"];
  route: Route<string>;
  descriptors: BottomTabBarProps["descriptors"];
  navigation: BottomTabBarProps["navigation"];
  index: number;
};

const BottomNavTouchableOpacityContainer: FC<Props> = ({ ...props }) => {
  const { state, route, descriptors, navigation, index } = props;

  const dispatch = useDispatch();
  const isAppearedBtns = useSelector(
    (state: RootState) => state.cameraAndAlbumReducer.isAppeared
  );
  const { options } = descriptors[route["key"]];
  const label = route["name"];
  const isFocused = state.index === index;

  const onPress = () => {
    if (isAppearedBtns) {
      dispatch(setCameraAndAlbumStatus(false));
      return;
    }
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
