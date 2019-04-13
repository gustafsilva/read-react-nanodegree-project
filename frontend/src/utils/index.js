export const filterPosts = (posts, category, filter = 'votes') => {
  const notDeletedPosts = posts.filter(post => post.deleted === false);

  const postsFilteredByCategory = category !== ''
    ? notDeletedPosts.filter(post => post.category === category)
    : notDeletedPosts;

  return filter === 'votes'
    ? postsFilteredByCategory.sort((a, b) => b.voteScore - a.voteScore)
    : postsFilteredByCategory.sort((a, b) => b.timestamp - a.timestamp);
};
