import React from "react";
import "../Styles/ContactRow.css";
import Avatar from "@mui/material/Avatar";

function ContactRow({ src, name }) {
  return (
    <div className="contactRow">
      {<Avatar src={src} />}
      <h4>{name}</h4>
    </div>
  );
}

export default ContactRow;
