import { Reducer } from "redux";
import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  notificationDataList: firebase.firestore.DocumentData[];
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
