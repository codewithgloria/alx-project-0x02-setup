import React from 'react';
import PostCard from '@/components/common/PostCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
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
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
  const posts = await res.json();

  return {
    props: {
      posts: posts.slice(0, 10)
    },
    revalidate: 10,
  };
}

export default PostsPage;