import React from 'react';

const SelectedPostList = ({ posts }) => {
  const selectedPosts = posts.map(post => <li key={post.id}>{post.title}</li>);

  return (
    <ul>
      {selectedPosts}
    </ul>
  );
};

export default SelectedPostList;
