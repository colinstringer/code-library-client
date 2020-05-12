import "./style.css";
import React from "react";

import Highlight from "react-highlight";
import { Row, Col } from "react-bootstrap";

function Example({ codeblock, output }) {
  return (
    <Row className="row">
      <Col xs={12} md={12} lg={6} xl={6}>
        <p>Code</p>
        <Highlight language="javascript">{codeblock}</Highlight>
      </Col>
      <Col
        xs={12}
        md={12}
        lg={{ span: 5, offset: 1 }}
        xl={{ span: 5, offset: 1 }}
      >
        <p>Output</p>
        <Highlight language="javascript">{output}</Highlight>
      </Col>
    </Row>
  );
}

export default Example;
