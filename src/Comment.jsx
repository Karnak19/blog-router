import React from "react";
import { Row, Col } from "reactstrap";

function Comment({ email, body }) {
  return (
    <Row>
      <Col>
        <h1>{email}</h1>
        <p>{body}</p>
      </Col>
    </Row>
  );
}

export default Comment;
