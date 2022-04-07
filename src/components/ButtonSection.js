import React, { useEffect } from "react";
import { connect } from "react-redux";
import { onLoopClick, onPlayStopClick } from "../redux/actions";

const ButtonSection = ({
  onLoopClick,
  onPlayStopClick,
  isPlaying,
  isLooping,
}) => {
  const onPlayButtonClick = () => {
    if (isPlaying) return;
    onPlayStopClick(isPlaying);
  };

  const onStopButtonClick = () => {
    if (!isPlaying) return;

    onPlayStopClick(isPlaying);
  };
  const onLoopButtonClick = () => {
    onLoopClick(isLooping);
  };
  return (
    <div className="ui center aligned segment buttonSection-container">
      <button
        onClick={onPlayButtonClick}
        className={`ui ${isPlaying ? "" : "basic"} labeled icon green button`}
      >
        <i className="play icon"></i>
        Play
      </button>
      <button
        onClick={onStopButtonClick}
        className={`ui red ${isPlaying ? "basic" : ""} labeled icon  button`}
      >
        <i className="pause icon"></i>
        Pause
      </button>
      <button
        onClick={onLoopButtonClick}
        className={`ui ${isLooping ? "" : "basic"} labeled icon purple button`}
      >
        <i className="sync icon"></i>
        Loop
      </button>
    </div>
  );
};

const mapStateToProps = ({ playerStatusReducer }) => {
  return {
    isPlaying: playerStatusReducer.isPlaying,
    isLooping: playerStatusReducer.isLooping,
  };
};

export default connect(mapStateToProps, { onLoopClick, onPlayStopClick })(
  ButtonSection
);
