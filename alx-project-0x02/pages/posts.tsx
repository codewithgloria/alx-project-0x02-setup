import React, { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostsPage;