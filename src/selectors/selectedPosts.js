import { createSelector } from 'reselect';

const postsSelector = ({ posts }) => posts;
const selectedPostsSelector = ({ selectedPostIds }) => selectedPostIds;

const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = posts.filter(post => selectedPostIds.indexOf(post.id) !== -1);

  return selectedPosts;
};

export default createSelector(
  postsSelector, //pick the piece of state
  selectedPostsSelector, //pick the piece of state
  getPosts //last argument is the function that has our select logic
);
