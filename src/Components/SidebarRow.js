import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow(props) {
  const { src, Icon, title } = props;

  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <div className="sidebar-text">
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default SidebarRow;
