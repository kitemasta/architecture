import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedPostsSelector from '../../../selectors/selectedPosts';
import { loadPosts, togglePost } from '../../../actions/posts';
import * as types from '../../../types';
import SelectedPostList from '../components/SelectedPostList';
import PostList from '../components/PostList';
import { Form } from 'semantic-ui-react';

class PostListWrapper extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { posts, selectedPosts, togglePost, isLoading } = this.props;

    return (
      <Form loading={isLoading}>
        <SelectedPostList posts={selectedPosts} />
        <PostList posts={posts} onChange={togglePost} />
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  selectedPosts: SelectedPostsSelector(state),
  isLoading: state.spinner[types.LOAD_POSTS],
});

export default connect(mapStateToProps, { loadPosts, togglePost })(PostListWrapper);
