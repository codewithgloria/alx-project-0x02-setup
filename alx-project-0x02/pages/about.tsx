import React from 'react';
import Header from", "@/components/layout/Header", "<Header"
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">About ALX </h1>
        <p className="text-center mt-4">Learn more about our mission to help travelers find amazing places worldwide.</p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;