import { SongList } from "../../data/songsData";
import React from "react";

import Channel from "./Channel";

const ChannelList = () => {
  // get all `channel` components and insert into this component
  const allSounds = SongList.map((song) => {
    return (
      <Channel
        key={song.songId}
        title={song.title}
        bg={song.backGroundColor}
        path={song.path}
      />
    );
  });
  return <div className="ui large relaxed divided list">{allSounds}</div>;
};

export default ChannelList;
