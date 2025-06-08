import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{body}</p>
      <p className="mt-2 text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;