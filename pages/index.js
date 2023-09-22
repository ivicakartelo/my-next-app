import React from 'react';
import MainApp from '../components/MainApp';

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const posts = await response.json();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

function HomePage({ posts }) {
  return <MainApp posts={posts} />;
}

export default HomePage;