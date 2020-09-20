import { Reducer } from "redux";
import { Timestamp } from "@google-cloud/firestore";
import { ActionTypes, UnionedAction } from "../actions/index";

type NotificationItems = {
  opponent_uid: string;
  opponent_url: string;
  opponent_name: string;
  photo_url: string;
  uid: string;
  content: string;
  create_time: Timestamp;
};

type State = {
  notificationDataList: NotificationItems[];
};

type NotificationReducer = Reducer<State, UnionedAction>;

const initialState: State = {
  notificationDataList: [],
};

export const notificationReducer: NotificationReducer = (
  state = initialState,
  action: UnionedAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_NOTIFICATION_DATA_LIST:
      return {
        ...state,
        notificationDataList: action.payload.notificationDataList,
      };
    default: {
      return state;
    }
  }
};
