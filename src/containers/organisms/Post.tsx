import React, { FC, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import type { NavigationProp } from "@react-navigation/core/lib/typescript/src/types";
import Post from "../../components/organisms/Post";
import { RootState } from "../../reducers/index";
import { setBottomNavStatus } from "../../actions/bottomNav";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { styles } from "../../styles/post";

type Props = {
  navigation: NavigationProp<Record<string, object>>;
};

const PostContainer: FC<Props> = ({ ...props }) => {
  const dispatch = useDispatch();
  const { navigation } = props;

  useEffect(() => {
    dispatch(setBottomNavStatus(false));
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
          <FontAwesome name="times" style={styles.crossButton} />
        </TouchableOpacity>
      ),
    });
    return () => {
      dispatch(setBottomNavStatus(true));
    };
  }, []);

  const uri = useSelector((state: RootState) => state.postReducer.uri);
  return <Post uri={uri} />;
};

export default PostContainer;
