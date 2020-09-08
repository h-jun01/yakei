import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Timestamp } from "@google-cloud/firestore";
import { RootState } from "../../reducers/index";
import { useDisplayTime } from "../../utilities/hooks/date";
import { FieldValue } from "../../firebase/firebase";
import { accountFireStore } from "../../firebase/accountFireStore";
import { photoFireStore } from "../../firebase/photoFireStore";
import { notificationFireStore } from "../../firebase/notificationFireStore";
import { upDateFavoriteList } from "../../actions/user";
import { sendPushFavoriteNotification } from "../../utilities/sendPushNotification";
import DetailPostedPageItems from "../../components/molecules/DetailPostedPageItems";

type Props = {
  uid: string;
  url: string;
  photo_id: string;
  latitude: number;
  longitude: number;
  create_time: Timestamp;
};

const DetailPostedPageItemsContainer: FC<Props> = ({ ...props }) => {
  const { photo_id, create_time, uid, url } = props;

  const selectFavoriteList = (state: RootState) =>
    state.userReducer.favoriteList;
  const selectOpponentUid = (state: RootState) => state.userReducer.uid;
  const selectOpponentUrl = (state: RootState) => state.userReducer.userImg;
  const selectOpponentName = (state: RootState) => state.userReducer.name;

  const favoriteList = useSelector(selectFavoriteList);
  const opponentUid = useSelector(selectOpponentUid);
  const opponentUrl = useSelector(selectOpponentUrl);
  const opponentName = useSelector(selectOpponentName);

  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const [isFavoriteStatus, setIsFavoriteStatus] = useState(false);

  const dispach = useDispatch();

  const date = useDisplayTime(create_time.toMillis());

  // お気に入り数取得
  useEffect(() => {
    photoFireStore.getFavoriteNumber(photo_id).then((res) => {
      setFavoriteNumber(res);
    });
  }, [favoriteList]);

  // お気に入りチェック
  useEffect(() => {
    favoriteList.indexOf(photo_id) !== -1
      ? setIsFavoriteStatus(true)
      : setIsFavoriteStatus(false);
  });

  // お気に入り押下時
  const pressedFavorite = async () => {
    if (!isFavoriteStatus) {
      setIsFavoriteStatus(true);

      await accountFireStore.updateFavoriteList(photo_id);
      await photoFireStore.IncrementFavoriteNumber(photo_id, favoriteNumber);
      await photoFireStore.getFavoriteNumber(photo_id).then((res) => {
        setFavoriteNumber(res);
      });

      const newFavoriteList = favoriteList.slice();
      newFavoriteList.push(photo_id);
      dispach(upDateFavoriteList(newFavoriteList));

      const notificationItems = {
        uid,
        opponent_uid: opponentUid,
        opponent_url: opponentUrl,
        opponent_name: opponentName,
        photo_url: url,
        content: "いいね",
        create_time: FieldValue.serverTimestamp() as Timestamp,
      };

      if (uid !== opponentUid) {
        await notificationFireStore.notificationOpponentFavorite(
          notificationItems
        );
        await accountFireStore.getDeviceToken(uid).then(async (res) => {
          await sendPushFavoriteNotification(res, opponentName);
        });
      }
    } else {
      await accountFireStore.deleteFavoriteItem(photo_id);
      await photoFireStore.DecrementFavoriteNumber(photo_id, favoriteNumber);
      await photoFireStore.getFavoriteNumber(photo_id).then((res) => {
        setFavoriteNumber(res);
      });

      const newFavoriteList = favoriteList.slice();
      newFavoriteList.splice(newFavoriteList.indexOf(photo_id), 1);
      dispach(upDateFavoriteList(newFavoriteList));

      setIsFavoriteStatus(false);
    }
  };

  return (
    <DetailPostedPageItems
      favoriteNumber={favoriteNumber}
      date={date}
      isFavoriteStatus={isFavoriteStatus}
      pressedFavorite={pressedFavorite}
    />
  );
};

export default DetailPostedPageItemsContainer;
