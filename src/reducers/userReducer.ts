import { ActionTypes, UnionedAction } from "../actions/index";

type State = {
  uid: string;
  name: string;
  userImg: string;
  titleList: [];
  createTime: { t: { nanoseconds: number; seconds: number } };
  updateTime: { t: { nanoseconds: number; seconds: number } };
};

const initialState: State = {
  uid: "",
  name: "",
  userImg: "",
  titleList: [],
  createTime: { t: { nanoseconds: 0, seconds: 0 } },
  updateTime: { t: { nanoseconds: 0, seconds: 0 } },
};

export const userReducer = (state = initialState, action: UnionedAction) => {
  switch (action.type) {
    case ActionTypes.USER_DATA:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
        userImg: action.payload.userImg,
        titleList: action.payload.titleList,
        createTime: action.payload.createTime,
        updateTime: action.payload.updateTime,
      };
    default: {
      return state;
    }
  }
};
