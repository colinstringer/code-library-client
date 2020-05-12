import "./App.css";
import React, { useEffect } from "react";

import { Switch, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";
import { selectCurrentLibraryUsername } from "./store/appState/selectors";
import { setCurrentLibraryUsernameDefault } from "./store/appState/actions";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ViewPage from "./pages/ViewPage";
import EditPage from "./pages/EditPage";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const dispatch = useDispatch();
  const currentLibraryUsername = useSelector(selectCurrentLibraryUsername);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  useEffect(() => {
    if (currentLibraryUsername === "undefined")
      dispatch(setCurrentLibraryUsernameDefault());
  }, [dispatch, currentLibraryUsername]);

  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <div className="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/view-page/:pageId" component={ViewPage} />
          <Route path="/edit-page/:pageId" component={EditPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
