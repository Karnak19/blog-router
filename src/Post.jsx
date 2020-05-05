import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

function Post({ id, title }) {
  return (
    <Col
      xs={{
        size: 6,
      }}
    >
      <Link to={`posts/${id}`}>{title}</Link>
    </Col>
  );
}

export default Post;
