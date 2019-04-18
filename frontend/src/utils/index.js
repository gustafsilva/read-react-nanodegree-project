const filterPosts = (posts, category, filter = 'votes', filterOrd = 'asc') => {
  const notDeletedPosts = posts.filter(post => post.deleted === false);

  const postsFilteredByCategory = category !== ''
    ? notDeletedPosts.filter(post => post.category === category)
    : notDeletedPosts;

  return filter === 'votes'
    ? postsFilteredByCategory.sort((a, b) => {
      if (filterOrd === 'asc') {
        return b.voteScore - a.voteScore;
      }
      return a.voteScore - b.voteScore;
    })
    : postsFilteredByCategory.sort((a, b) => {
      if (filterOrd === 'asc') {
        return b.timestamp - a.timestamp;
      }
      return a.timestamp - b.timestamp;
    });
};

export default filterPosts;
