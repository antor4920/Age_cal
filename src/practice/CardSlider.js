import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is card 3",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is card 4",
    color: "bg-yellow-500",
  },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        className="flex space-x-4 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`min-w-full p-10 text-white rounded-lg shadow-lg ${card.color}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold">{card.title}</h2>
            <p>{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
