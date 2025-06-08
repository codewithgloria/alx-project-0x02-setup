import React from 'react';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface UserData {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
}

interface UsersPageProps {
  users: UserData[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
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
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
  const users = await res.json();

  return {
    props: {
      users: users.slice(0, 10)
    },
    revalidate: 10,
  };
}

export default UsersPage;