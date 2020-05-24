import "./style.css"
import React from "react";
import { useHistory } from "react-router-dom";

function SidebarLink({ page, linkStyle }) {
  const history = useHistory();

  function gotoPage() {
    history.push(`/view-page/${page.id}`);
  }

  return (

    <button onClick={gotoPage} style={linkStyle} className="link">
      {page.name}
    </button>
  );
}

export default SidebarLink;
