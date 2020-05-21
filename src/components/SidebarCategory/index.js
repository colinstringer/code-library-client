import "./style.css";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addPage } from "../../store/user/actions";
import { selectUsername } from "../../store/user/selectors";
import { selectCurrentLibraryUsername } from "../../store/appState/selectors";

import SidebarLink from "../SidebarLink";

function SidebarCategory({ category, categoryStyle, linkStyle, inputStyle }) {
  const dispatch = useDispatch();

  const loggedInUsername = useSelector(selectUsername);
  const currentLibraryUsername = useSelector(selectCurrentLibraryUsername);
  const [newPageName, setNewPageName] = useState("");

  function onSubmit(event) {
    if (event.key === "Enter") {
      setNewPageName("");
      dispatch(addPage(newPageName, category.id));
    }
  }

  const pageInput =
    loggedInUsername === currentLibraryUsername ? (
      <input
        type="text"
        placeholder=" + add new page..."
        value={newPageName}
        onChange={(event) => setNewPageName(event.target.value)}
        onKeyPress={onSubmit}
        onBlur={() => setNewPageName("")}
        style={inputStyle}
      />
    ) : null;

  return (
    <>
      <h3 style={categoryStyle}>{category.name}</h3>

      {category.pages.map((page) => {
        return <SidebarLink key={page.id} page={page} linkStyle={linkStyle} />;
      })}
      {pageInput}
    </>
  );
}

export default SidebarCategory;
