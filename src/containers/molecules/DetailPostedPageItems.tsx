import React, { FC } from "react";
import { Timestamp } from "@google-cloud/firestore";
import { useDisplayTime } from "../../utilities/hooks/date";
import DetailPostedPageItems from "../../components/molecules/DetailPostedPageItems";

type Props = {
  favoriteNumber: number;
  latitude: number;
  longitude: number;
  create_time: Timestamp;
};

const DetailPostedPageItemsContainer: FC<Props> = ({ ...props }) => {
  const { favoriteNumber, create_time } = props;

  const date = useDisplayTime(create_time.toDate());

  return <DetailPostedPageItems favoriteNumber={favoriteNumber} date={date} />;
};

export default DetailPostedPageItemsContainer;
