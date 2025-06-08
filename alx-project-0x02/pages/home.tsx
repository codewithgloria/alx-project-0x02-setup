import React from 'react';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

const HomePage = () => {
  const cards = [
    { title: "Welcome", content: "Find your favorite place here!" },
    { title: "Why Choose Us?", content: "We offer the best prices for over 2 million properties worldwide." },
    { title: "Explore More", content: "Browse our listings and find your dream destination." }
  ];

  return (
    <div>
      <Header />
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">Home Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;