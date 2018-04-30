import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, onChange }) => {
  const list = posts.map(post =>
    <PostItem key={post.id} id={post.id} title={post.title} onChange={onChange} />
  );

  return (
    <ul>
      {list}
    </ul>
  );
};

export default PostList;
