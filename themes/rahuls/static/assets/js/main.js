const postContainer = document.querySelector('.post-container');

  const options = {
    path: '.post-load-more',
    append: '.post-card',
    loadOnScroll: false,
    button: '.post-load-more',
    history: null,
  };

  if (document.querySelector('.post-load-more')) {
    new InfiniteScroll(postContainer, options);
  }