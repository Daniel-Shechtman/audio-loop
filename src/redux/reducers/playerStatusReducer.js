import { Action } from "../actions/actionNames";

const initReducer = {
  isPlaying: false,
  isLooping: false,
  currentProgress: 0,
};

export const playerStatusReducer = (state = initReducer, action) => {
  switch (action.type) {
    case Action.ON_CLICK_PLAY:
      return { ...state, isPlaying: action.payload };
    case Action.ON_CLICK_LOOP:
      return { ...state, isLooping: action.payload };
    case Action.ON_PROGRESS:
      return { ...state, currentProgress: action.payload };
    default:
      return state;
  }
};
