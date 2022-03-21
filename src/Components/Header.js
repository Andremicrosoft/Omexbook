import React from "react";
import "./Header.css";
import { IconButton } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import FlagSharpIcon from "@mui/icons-material/FlagSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import SupervisedUserCircleSharpIcon from "@mui/icons-material/SupervisedUserCircleSharp";
import Avatar from "@mui/material/Avatar";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MessageIcon from "@mui/icons-material/Message";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          // src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="fb logo"
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
          <FlagSharpIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SubscriptionsSharpIcon fontSize="large" />
        </div>
        <div className="header-option">
          <StorefrontSharpIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SupervisedUserCircleSharpIcon fontSize="large" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <Avatar />
          <h3>Andre</h3>
        </div>

        <IconButton>
          <AddCircleIcon />
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
