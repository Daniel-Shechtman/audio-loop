import "./App.css";
import React from "react";

import ButtonSection from "./ButtonSection";
import ChannelList from "./channelComponents/ChannelList";
import ChannelProgress from "./channelComponents/ChannelsProgress";

const App = () => {
  return (
    <div className="ui grid">
      <div className="six wide column left-container">
        <ChannelList />
        <ButtonSection />
      </div>
      <div className="nine wide column right-container">
        <ChannelProgress />
      </div>
    </div>
  );
};

export default App;
