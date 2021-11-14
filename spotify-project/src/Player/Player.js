import React from "react";

import SideBar from "../SideBar/SideBar";

import Body from "../Body/Body";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />

        <Body />
      </div>
    </div>
  );
}

export default Player;
