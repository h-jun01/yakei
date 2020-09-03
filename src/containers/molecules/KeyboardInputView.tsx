import React, { FC } from "react";
import { TextInput, Keyboard } from "react-native";
import { RootState } from "../../reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { commentFireStore } from "../../firebase/commentFireStore";
import { useInput } from "../../utilities/hooks/input";
import { setIsInputForm, setCommentDataList } from "../../actions/postedData";
import KeyboardInputView from "../../components/molecules/KeyboardInputView";

type Props = {
  textInputRef: React.MutableRefObject<TextInput | null>;
  photo_id: string;
};

const KeyboardInputViewContainer: FC<Props> = ({ textInputRef, photo_id }) => {
  const selectUid = (state: RootState) => state.userReducer.uid;
  const selectIsInputForm = (state: RootState) =>
    state.postedDataReducer.isInputForm;

  const uid = useSelector(selectUid);
  const isInputForm = useSelector(selectIsInputForm);

  const inputValue = useInput("");
  const dispatch = useDispatch();

  //コメントを送信
  const addComment = async () => {
    await commentFireStore
      .postedComment(photo_id, uid, inputValue.value)
      .then(() => {
        commentFireStore.getCommentDataList(photo_id).then((res) => {
          dispatch(setCommentDataList(res));
        });
      });
    dispatch(setIsInputForm(false));
    Keyboard.dismiss();
  };

  //キーボードが消えたとき
  const onBlur = () => {
    isInputForm && dispatch(setIsInputForm(false));
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
