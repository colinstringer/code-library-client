import "./style.css";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { toggleIsSidebarOpen } from "../../store/appState/actions";
import { selectIsSidebarOpen } from "../../store/appState/selectors";

import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

function SidebarOpener() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(selectIsSidebarOpen);

  const menuIcon = isSidebarOpen ? <FaTimes className="close-menu" /> : <FiMenu className="open-menu" />;
  function toggleSidebar() {
    dispatch(toggleIsSidebarOpen());
  }

  return (
    <div onClick={toggleSidebar}>
      {menuIcon}
    </div>
  );
}

export default SidebarOpener;
