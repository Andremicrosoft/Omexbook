import React from "react";
import "../Styles/Header.css";
import { IconButton } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import SupervisedUserCircleSharpIcon from "@mui/icons-material/SupervisedUserCircleSharp";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import MessageIcon from "@mui/icons-material/Message";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="msft logo"
        />
      </div>
      <div className="header-input">
        <SearchSharpIcon />
        <input type="text" placeholder="Search Avocado" />
      </div>
      <div className="header-center">
        <div className="header-option header-option-active">
          <HomeSharpIcon fontSize="large" />
        </div>
        <div className="header-option">
          <YouTubeIcon fontSize="large" />
        </div>
        <div className="header-option">
          <StorefrontSharpIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SupervisedUserCircleSharpIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SportsEsportsIcon fontSize="large" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <Avatar
            src={
              user.photoURL
                ? user.photoURL
                : "https://imgur.com/user/cyberavocado21/avatar"
            }
          />
          <h3>{user.displayName ? user.displayName : "Avoca Guest"}</h3>
        </div>

        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <CircleNotificationsIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
