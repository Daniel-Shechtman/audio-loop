import React from "react";
import { connect } from "react-redux";
import { SongList } from "../../data/songsData";
import ChannelProgress from "./ChannelProgress";

const ChannelsProgress = ({ currentProgress }) => {
  // render all channels progress in the left side an
  const prosesBars = SongList.map((song) => {
    return (
      <ChannelProgress
        key={song.songId}
        backGroundColor={song.backGroundColor}
      />
    );
  });
  return (
    <div className="ui large relaxed divided list all-channels-progress">
      <div>{prosesBars}</div>
      <div
        className="progress"
        style={{ left: `${currentProgress > 97 ? 97 : currentProgress}%` }}
      ></div>
    </div>
  );
};

// connect currentProgress state to this component (it will help keeping truck with the cursor on top of all the channels)
const mapStateToProp = ({ playerStatusReducer }) => {
  return { currentProgress: playerStatusReducer.currentProgress };
};
export default connect(mapStateToProp, {})(ChannelsProgress);
