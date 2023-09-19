import React from 'react';
import { AddPostForm } from '../pages/posts/AddPostForm';
import { PostsList } from '../pages/posts/PostsList';

function MainApp({ posts }) {
  return (
    <>
      <AddPostForm />
      <PostsList posts={posts} />
    </>
  );
}

export default MainApp;