"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,    
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-[28rem] w-full transition-all duration-300 ease-out group",
        hovered !== null && hovered !== index && "opacity-70 scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end py-6 px-4">
        <div className="w-full">
          <div className="text-lg sm:text-xl xl:text-2xl font-medium text-white text-start">
            {card.title}
          </div>
          {hovered === index && (
            <div className="mt-2 text-sm text-white/80 text-start transition-opacity duration-300">
              {card.role || 'Team Member'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto px-4 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
