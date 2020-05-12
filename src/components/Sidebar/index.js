import "./style.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCategory } from "../../store/user/actions";
import { selectUsername } from "../../store/user/selectors";
import { fetchCurrentLibrary } from "../../store/currentLibrary/actions";
import { selectCurrentLibrary } from "../../store/currentLibrary/selectors";
import { selectCurrentLibraryUsername } from "../../store/appState/selectors";

import SidebarCategory from "../SidebarCategory";

function Sidebar() {
  const dispatch = useDispatch();
  const currentLibrary = useSelector(selectCurrentLibrary);
  const loggedInUsername = useSelector(selectUsername);
  const currentLibraryUsername = useSelector(selectCurrentLibraryUsername);
  const [categoryFontSize, setCategoryFontSize] = useState("30px");
  const [linkFontSize, setLinkFontSize] = useState("20px");
  const [inputWidth, setInputWidth] = useState("170px");
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    dispatch(fetchCurrentLibrary());
  }, [dispatch]);

  const categoryStyle = {
    fontSize: categoryFontSize,
  };

  const linkStyle = {
    fontSize: linkFontSize,
  };

  const inputStyle = {
    width: inputWidth,
  };

  function sidebarHoverOn() {
    setCategoryFontSize("30px");
    setLinkFontSize("20px");
    setInputWidth("170px");
  }

  function sidebarHoverOut() {
    setCategoryFontSize("0px");
    setLinkFontSize("0px");
    setInputWidth("0px");
  }

  function onSubmit(event) {
    if (event.key === "Enter") {
      setNewCategoryName("");
      dispatch(addCategory(newCategoryName, currentLibrary.id));
    }
  }

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
    <div
      className="sidebar"
      onMouseEnter={sidebarHoverOn}
      onMouseLeave={sidebarHoverOut}
    >
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
