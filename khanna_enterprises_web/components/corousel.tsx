interface Card {
  title: string;
  description: string;
}

interface CardCarouselProps {
  cards: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  return (
    <div className='w-full md:w-auto relative'>
      <div className='overflow-hidden h-auto md:h-64'>
        <div className='flex transition-transform duration-300'>
          {cards.map((card, index: number) => (
            <div
              key={index}
              className='w-full md:w-72 bg-white shadow-lg rounded-lg p-4 flex-shrink-0'
            >
              {/* Card Content */}
              <h2 className='text-xl font-semibold'>{card.title}</h2>
              <p className='text-gray-600'>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
