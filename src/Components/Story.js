import React from "react";
import "../Styles/Story.css";
import Avatar from "@mui/material/Avatar";

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story-avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
