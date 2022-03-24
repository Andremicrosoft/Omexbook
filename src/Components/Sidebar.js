import React from "react";
import "../Styles/Sidebar.css";
import SidebarRow from "./SidebarRow";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import PeopleIcon from "@mui/icons-material/People";
import FlagSharpIcon from "@mui/icons-material/FlagSharp";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import CakeIcon from "@mui/icons-material/Cake";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow
        src={
          user.photoURL
            ? user.photoURL
            : "https://imgur.com/user/cyberavocado21/avatar"
        }
        title={user.displayName ? user.displayName : "Avoca Guest"}
      />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Groups" />
      <SidebarRow Icon={FlagSharpIcon} src="" icon="" title="Pages" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={SubscriptionsSharpIcon} title="Videos" />
      <SidebarRow Icon={CakeIcon} title="Birthday" />
    </div>
  );
}

export default Sidebar;
