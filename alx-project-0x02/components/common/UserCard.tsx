import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address, phone }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>Email: {email}</p>
      <p>City: {address.city}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default UserCard;