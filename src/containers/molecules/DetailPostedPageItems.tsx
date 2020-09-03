import React, { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Timestamp } from "@google-cloud/firestore";
import { RootState } from "../../reducers/index";
import { useDisplayTime } from "../../utilities/hooks/date";
import { accountFireStore } from "../../firebase/accountFireStore";
import { photoFireStore } from "../../firebase/photoFireStore";
import { upDateFavoriteList } from "../../actions/user";
import DetailPostedPageItems from "../../components/molecules/DetailPostedPageItems";

type Props = {
  photo_id: string;
  latitude: number;
  longitude: number;
  create_time: Timestamp;
};

const DetailPostedPageItemsContainer: FC<Props> = ({ ...props }) => {
  const { photo_id, create_time } = props;

  const selectFavoriteList = (state: RootState) =>
    state.userReducer.favoriteList;

  const favoriteList = useSelector(selectFavoriteList);

  const [favoriteNumber, setFavoriteNumber] = useState<number>(0);
  const [isFavoriteStatus, setIsFavoriteStatus] = useState<boolean>(false);

  const dispach = useDispatch();

  const date = useDisplayTime(create_time.toDate());

  // お気に入り数取得
  useEffect(() => {
    photoFireStore.getFavoriteNumber(photo_id).then((res) => {
      setFavoriteNumber(res);
    });
  }, [favoriteList]);

  // お気に入りチェック
  useEffect(() => {
    if (favoriteList.indexOf(photo_id) !== -1) {
      setIsFavoriteStatus(true);
    } else {
      setIsFavoriteStatus(false);
    }
  });

  // お気に入り押下時
  const pressedFavorite = async () => {
    if (!isFavoriteStatus) {
      await accountFireStore.updateFavoriteList(photo_id);
      await photoFireStore.IncrementFavoriteNumber(photo_id, favoriteNumber);
      await photoFireStore.getFavoriteNumber(photo_id).then((res) => {
        setFavoriteNumber(res);
      });

      const newFavoriteList = favoriteList.slice();
      newFavoriteList.push(photo_id);
      dispach(upDateFavoriteList(newFavoriteList));

      setIsFavoriteStatus(true);
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
