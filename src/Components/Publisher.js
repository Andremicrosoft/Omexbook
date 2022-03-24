import React, { useState } from "react";
import "../Styles/Publisher.css";
import Avatar from "@mui/material/Avatar";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Button from "@mui/material/Button";

function Publisher() {
  const [{ user }, dispatch] = useStateValue();
  const [inputValue, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    // Prevent the default reloading of the page when we submit the form
    e.preventDefault();

    db.collection("posts").add({
      username: user.displayName,
      message: inputValue,
      image: imageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
    });

    // Reset the values
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="publisher">
      <div className="publisher-top">
        <Avatar
          src={
            user.photoURL
              ? user.photoURL
              : "https://imgur.com/user/cyberavocado21/avatar"
          }
        />
        <form>
          <input
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
            className="publisher-input"
            placeholder={"Press Enter or click on the Post button to publish."}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL (Optional)"
          />

          <Button onClick={handleSubmit} type="submit">
            Post
          </Button>
        </form>
      </div>
      <div className="publisher-bottom">
        <div className="publisher-option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Call</h3>
        </div>
        <div className="publisher-option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Screenshot</h3>
        </div>
        <div className="publisher-option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Mood</h3>
        </div>
      </div>
    </div>
  );
}

export default Publisher;
