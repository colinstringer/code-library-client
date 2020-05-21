import "./style.css";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addCategory } from "../../store/user/actions";
import { selectUsername } from "../../store/user/selectors";
import { selectIsSidebarOpen } from "../../store/appState/selectors";
import { fetchCurrentLibrary } from "../../store/currentLibrary/actions";
import { setCurrentLibraryUsername } from "../../store/appState/actions";
import { selectCurrentLibrary } from "../../store/currentLibrary/selectors";
import { selectCurrentLibraryUsername } from "../../store/appState/selectors";

import SidebarOpener from "../SidebarOpener";
import { useHistory } from "react-router-dom";
import SidebarCategory from "../SidebarCategory";

function Sidebar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const loggedInUsername = useSelector(selectUsername);
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const currentLibrary = useSelector(selectCurrentLibrary);
  const currentLibraryUsername = useSelector(selectCurrentLibraryUsername);

  const [linkOpacity, setLinkOpacity] = useState("0");
  const [inputWidth, setInputWidth] = useState("170px");
  const [linkFontSize, setLinkFontSize] = useState("0");
  const [linkCursor, setLinkCursor] = useState("default");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [selectorOpacity, setSelectorOpacity] = useState("0");
  const [categoryFontSize, setCategoryFontSize] = useState("0");
  const [selectorFontSize, setSelectorFontSize] = useState("0");

  const categoryStyle = {
    fontSize: categoryFontSize,
  };

  let linkStyle = {
    fontSize: linkFontSize,
    opacity: linkOpacity,
    cursor: linkCursor
  };

  const inputStyle = {
    width: inputWidth,
  };

  const selectorStyle = {
    fontSize: selectorFontSize,
    opacity: selectorOpacity,
  };

  useEffect(() => {
    dispatch(fetchCurrentLibrary());
  }, [dispatch]);

  useEffect(() => {
    if (isSidebarOpen) {
      setLinkOpacity("1");
      setInputWidth("170px");
      setLinkFontSize("20px");
      setLinkCursor("pointer")
      setSelectorOpacity("0.9");
      setCategoryFontSize("30px");
      setSelectorFontSize("15px");
    } else {
      setInputWidth("0");
      setLinkOpacity("0");
      setLinkFontSize("0");
      setSelectorOpacity("0");
      setLinkCursor("default")
      setCategoryFontSize("0");
      setSelectorFontSize("0");
    }
  }, [isSidebarOpen]);

  function handleSelect(event) {
    if (event.target.value === "General Library") {
      dispatch(setCurrentLibraryUsername("admin"));
      dispatch(fetchCurrentLibrary());
      history.push("/");
    }

    if (event.target.value === "My Library") {
      dispatch(setCurrentLibraryUsername(loggedInUsername));
      dispatch(fetchCurrentLibrary());
      history.push("/");
    }
  }

  function onSubmit(event) {
    if (event.key === "Enter") {
      setNewCategoryName("");
      dispatch(addCategory(newCategoryName, currentLibrary.id));
    }
  }

  const personalLibraryOption = loggedInUsername ? (
    <option>My Library</option>
  ) : null;

  const categoryInput =
    loggedInUsername === currentLibraryUsername ? (
      <input
        type="text"
        placeholder=" + add new category..."
        value={newCategoryName}
        onChange={(event) => setNewCategoryName(event.target.value)}
        onKeyPress={onSubmit}
        onBlur={() => setNewCategoryName("")}
        style={inputStyle}
      />
    ) : null;

  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <select
          onChange={handleSelect}
          style={selectorStyle}
          className="library-selector"
        >
          <option>General Library</option>
          {personalLibraryOption}
        </select>
        <SidebarOpener />
      </div>

      <br />

      {currentLibrary.categories.map((category) => {
        return (
          <SidebarCategory
            key={category.id}
            category={category}
            categoryStyle={categoryStyle}
            linkStyle={linkStyle}
            inputStyle={inputStyle}
          />
        );
      })}
      <br />
      {categoryInput}
    </div>
  );
}

export default Sidebar;
