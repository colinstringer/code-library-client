import "./style.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { addNewExample } from "../../store/user/actions";

import Example from "../Example";

function AddExample() {
  const dispatch = useDispatch();
  const pageId = parseInt(useParams().pageId);

  const [codeblockPreviewText, setCodeblockPreviewText] = useState(
    "enter new codeblock"
  );
  const [outputPreviewText, setOutputPreviewText] = useState(
    "enter new output"
  );

  function handleAddNewExample() {
    dispatch(addNewExample(codeblockPreviewText, outputPreviewText, pageId));
    setCodeblockPreviewText("enter new codeblock");
    setOutputPreviewText("enter new output");
  }

  return (
    <>
      <Row className="add-example-row">
        <p>Add example</p>
        <Col xs={12} md={12} lg={12} xl={12} className="add-example-col">
          <textarea
            rows="4"
            cols="60"
            maxLength="2000"
            type="text"
            className="name"
            value={codeblockPreviewText}
            onChange={(e) => setCodeblockPreviewText(e.target.value)}
          />
        </Col>
        <Col xs={12} md={12} lg={12} xl={12} className="add-example-col">
          <textarea
            rows="4"
            cols="35"
            maxLength="2000"
            type="text"
            className="name"
            value={outputPreviewText}
            onChange={(e) => setOutputPreviewText(e.target.value)}
          />
        </Col>
        <h2>Preview for new example</h2>
        <Col xs={12} md={12} lg={12} xl={12} className="add-example-col">
          <Example
            codeblock={codeblockPreviewText}
            output={outputPreviewText}
          />
        </Col>
        <button className="add-example-button" onClick={handleAddNewExample}>
          Add new example
        </button>
      </Row>
    </>
  );
}

export default AddExample;
