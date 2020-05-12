import "./style.css";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logOut } from "../../store/user/actions";
import { selectToken, selectUsername } from "../../store/user/selectors";
import { setCurrentLibraryUsername } from "../../store/appState/actions";
import { fetchCurrentLibrary } from "../../store/currentLibrary/actions";

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const username = useSelector(selectUsername);
  const history = useHistory();

  function logOutClicked() {
    dispatch(logOut());
    history.push("/");
  }

  const loginLogoutControls = token ? (
    <button style={{ fontSize: "20px" }} onClick={logOutClicked}>
      Logout
    </button>
  ) : (
    <a href={`/login`}>Login</a>
  );

  const myLibrary =
    token && username !== "admin" && username !== "undefined" ? (
      <button style={{ fontSize: "20px" }} onClick={myLibraryClicked}>
        My Library
      </button>
    ) : null;

  function generalLibraryClicked() {
    dispatch(setCurrentLibraryUsername("admin"));
    dispatch(fetchCurrentLibrary());
    history.push("/");
  }

  function myLibraryClicked() {
    dispatch(setCurrentLibraryUsername(username));
    dispatch(fetchCurrentLibrary());
    history.push("/");
  }

  return (
    <div className="header">
      <div className="header-left">
        <h1>The Code Library</h1>
        <a href={`/`}>Home</a>
        <button style={{ fontSize: "20px" }} onClick={generalLibraryClicked}>
          General Library
        </button>
        {myLibrary}
      </div>
      <div className="header-right">
        {loginLogoutControls}
        <a href={`/signup`}>Signup</a>
      </div>
    </div>
  );
}
