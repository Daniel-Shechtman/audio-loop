import { Action } from "./actionNames";

export const onPlayStopClick = (isPlaying) => {
  return {
    type: Action.ON_CLICK_PLAY,
    payload: !isPlaying,
  };
};

export const onLoopClick = (isLooping) => {
  return {
    type: Action.ON_CLICK_LOOP,
    payload: !isLooping,
  };
};

export const onProgress = (currentProgress) => {
  return {
    type: Action.ON_PROGRESS,
    payload: currentProgress,
  };
};
