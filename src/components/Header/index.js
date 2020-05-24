import "./style.css";
import React from "react";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logOut } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { setCurrentLibraryUsername } from '../../store/appState/actions';

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  function logOutClicked() {
    dispatch(logOut());
    dispatch(setCurrentLibraryUsername("admin"));
    history.push("/");
  }

  const loginLogoutControls = token ? (
    <button style={{ fontSize: "20px" }} onClick={logOutClicked}>
      Logout
    </button>
  ) : (
    <a href={`/login`}>Login</a>
  );

  return (
    <div className="header">
      <div className="header-left">
        <h1>The Code Library</h1>
        <a href={`/`}>Home</a>
      </div>
      <div className="header-right">
        {loginLogoutControls}
        <a href={`/signup`}>Signup</a>
      </div>
    </div>
  );
}
