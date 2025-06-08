import React, { useEffect, useState } from 'react';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

interface UserData {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {users.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default UsersPage;