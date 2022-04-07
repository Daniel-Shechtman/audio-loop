import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { onPlayStopClick } from "../../redux/actions";
import { onProgress } from "../../redux/actions";
const Channel = ({
  bg,
  title,
  path,
  isPlaying,
  isLooping,
  onPlayStopClick,
  onProgress,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [audio] = useState(new Audio(path));

  const songEnded = () => {
    if (!isLooping) {
      onPlayStopClick(true);
    }
  };

  const audioTimeUpdate = () => {
    onProgress((audio.currentTime / audio.duration) * 100);
  };

  // add two event listeners when this component renders for the first time
  // 1)The first event : in case that the audio is not looping and it came to an end isPlaying state changes to false
  // 2)The second event: keep track of what percentage has passed since the beginning of the song
  useEffect(() => {
    audio.addEventListener("ended", songEnded);
    audio.addEventListener("timeupdate", audioTimeUpdate);

    return () => {
      audio.removeEventListener("ended", songEnded);
      audio.removeEventListener("timeupdate", audioTimeUpdate);
    };
  }, []);

  // Toggle on/off audio
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else if (!isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isPlaying]);

  useEffect(() => {
    audio.loop = isLooping;
  }, [isLooping]);

  const onMuteClick = () => {
    audio.muted = !isMuted;
    // if the channel was unmuted and the audio is playing => toggle on the channel
    if (!audio.muted && isPlaying) {
      audio.play();
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="item" style={{ background: `${bg}` }}>
      <div className="content content-container">
        <div className="title-container">
          <i className="music icon"></i>
          <h4 className="ui center aligned header">{title}</h4>
        </div>
        <button
          onClick={onMuteClick}
          className={`ui right floated classic ${
            isMuted ? "red" : "green"
          } button`}
        >
          <i className={`ui volume ${isMuted ? "off" : "up"} icon`}></i>
          {`${isMuted ? "Channel muted" : "Channel unmuted"}`}
        </button>
      </div>
    </div>
  );
};

// connecting `isPlaying` and `isLooping ` to this component
const mapStateToProps = ({ playerStatusReducer }) => {
  return {
    isPlaying: playerStatusReducer.isPlaying,
    isLooping: playerStatusReducer.isLooping,
  };
};

export default connect(mapStateToProps, { onPlayStopClick, onProgress })(
  Channel
);
