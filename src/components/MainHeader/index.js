import "./style.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUsername } from "../../store/user/selectors";
import { selectCurrentLibraryUsername } from "../../store/appState/selectors";

function MainHeader() {
  const pageId = parseInt(useParams().pageId);
  const loggedInUsername = useSelector(selectUsername);
  const currentLibraryUsername = useSelector(selectCurrentLibraryUsername);

  if (loggedInUsername !== currentLibraryUsername) return null;

  return (
    <div className="main-header">
      <a href={`/view-page/${pageId}`}>View page</a>
      <a href={`/edit-page/${pageId}`}>Edit page</a>
    </div>
  );
}

export default MainHeader;
