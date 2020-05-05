import React, { Component } from "react";
import { Row, Col, Alert, Spinner } from "reactstrap";
import Axios from "axios";

import Post from "./Post";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err,
        });
      })
      .finally(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const { posts, error, loading } = this.state;
    if (error) {
      return <Alert color="danger">Error !</Alert>;
    }

    if (loading) {
      return (
        <Row>
          <Col
            xs={{
              offset: 4,
              size: 4,
            }}
          >
            <Spinner />
          </Col>
        </Row>
      );
    }

    return (
      <>
        <Row>
          <Col>
            <h1>Latest posts</h1>
          </Col>
        </Row>
        <Row>
          {posts.map((post) => {
            return <Post {...post} key={post.id} />;
          })}
        </Row>
      </>
    );
  }
}
