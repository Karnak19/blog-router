import React, { Component } from "react";
import { Container, Jumbotron, Spinner, Alert } from "reactstrap";
import Axios from "axios";
import Comment from "./Comment";
import UserModal from "./User.modal";

export default class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      post: {},
      comments: [],
      user: {},
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const [post, comments] = await Promise.all([
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
      ]);
      const user = await Axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.data.userId}`
      );

      this.setState({
        post: post.data,
        comments: comments.data,
        user: user.data,
      });
    } catch (error) {
      this.setState({
        error,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, post, comments, error, user } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Alert color="danger">Error..!</Alert>;
    }
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-3">{post.title}</h1>
          <p className="lead">{post.body}</p>
          <hr className="my-2" />

          <UserModal buttonLabel="Show user" user={user} />
        </Jumbotron>
        {comments.map((comment) => {
          return <Comment {...comment} key={comment.id} />;
        })}
      </Container>
    );
  }
}
