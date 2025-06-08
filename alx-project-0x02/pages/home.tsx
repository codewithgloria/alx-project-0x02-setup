import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

const HomePage = () => {
  const initialCards = [
    { title: "Welcome", content: "Find your favorite place here!" },
    { title: "Why Choose Us?", content: "We offer the best prices for over 2 million properties worldwide." },
    { title: "Explore More", content: "Browse our listings and find your dream destination." }
  ];

  const [cards, setCards] = useState(initialCards);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = ({ title, content }: { title: string; content: string }) => {
    setCards([...cards, { title, content }]);
  };

  return (
    <div>
      <Header />
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mt-8">Home Page</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 mx-auto block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add New Card
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </section>

      {isModalOpen && (
        <PostModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCard}
        />
      )}
    </div>
  );
};

export default HomePage;