import React, { FC } from "react";
import { TextInput, Keyboard } from "react-native";
import { Timestamp } from "@google-cloud/firestore";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { FieldValue } from "../../firebase/firebase";
import { accountFireStore } from "../../firebase/accountFireStore";
import { commentFireStore } from "../../firebase/commentFireStore";
import { notificationFireStore } from "../../firebase/notificationFireStore";
import { useInput } from "../../utilities/hooks/input";
import { setIsInputForm, setCommentDataList } from "../../actions/postedData";
import { setShouldDisplayBottomNav } from "../../actions/bottomNav";
import { sendPushCommentNotification } from "../../utilities/sendPushNotification";
import KeyboardInputView from "../../components/molecules/KeyboardInputView";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
  photo_id: string;
  uid: string;
  url: string;
};

const KeyboardInputViewContainer: FC<Props> = ({ ...props }) => {
  const { textInputRef, photo_id, uid, url } = props;

  const selectopponentUid = (state: RootState) => state.userReducer.uid;
  const selectOpponentUrl = (state: RootState) => state.userReducer.userImg;
  const selectOpponentName = (state: RootState) => state.userReducer.name;
  const selectIsInputForm = (state: RootState) =>
    state.postedDataReducer.isInputForm;

  const opponentUid = useSelector(selectopponentUid);
  const opponentUrl = useSelector(selectOpponentUrl);
  const opponentName = useSelector(selectOpponentName);
  const isInputForm = useSelector(selectIsInputForm);

  const inputValue = useInput("");
  const dispatch = useDispatch();

  //コメントを送信
  const addComment = async () => {
    if (!inputValue.value) {
      return;
    } else {
      await commentFireStore
        .postedComment(photo_id, opponentUid, inputValue.value)
        .then(() => {
          commentFireStore.getCommentDataList(photo_id).then((res) => {
            dispatch(setCommentDataList(res));
          });
        });

      const notificationItems = {
        uid,
        opponent_uid: opponentUid,
        opponent_url: opponentUrl,
        opponent_name: opponentName,
        photo_url: url,
        content: "コメント",
        create_time: FieldValue.serverTimestamp() as Timestamp,
      };

      if (uid !== opponentUid) {
        await notificationFireStore.notificationOpponentFavorite(
          notificationItems
        );
        await accountFireStore.getDeviceToken(uid).then(async (res) => {
          await sendPushCommentNotification(
            res,
            opponentName,
            inputValue.value
          );
        });
      }

      dispatch(setIsInputForm(false));
      dispatch(setShouldDisplayBottomNav(true));
      Keyboard.dismiss();
    }
  };

  //キーボードが消えたとき
  const onBlur = () => {
    if (isInputForm) {
      dispatch(setIsInputForm(false));
      dispatch(setShouldDisplayBottomNav(true));
    }
  };

  return (
    <KeyboardInputView
      textInputRef={textInputRef}
      inputValue={inputValue}
      isInputForm={isInputForm}
      addComment={addComment}
      onBlur={onBlur}
    />
  );
};

export default KeyboardInputViewContainer;
