import React from 'react';
import { AddPostForm } from '../pages/posts/AddPostForm';
import { PostsList } from '../pages/posts/PostsList';

function MainApp() {
  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
}

export default MainApp;