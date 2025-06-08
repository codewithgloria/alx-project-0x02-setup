import React from 'react';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mt-8 text-center">About ALX Listing</h1>
      <p className="text-center mt-4">We help travelers find amazing places worldwide.</p>

      <div className="flex justify-center gap-4 mt-6">
        <Button title="Small Rounded" shape="rounded-sm" />
        <Button title="Medium Rounded" shape="rounded-md" />
        <Button title="Fully Rounded" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;