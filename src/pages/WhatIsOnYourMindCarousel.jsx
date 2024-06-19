import WhatIsOnYourMind from '../components/WhatIsOnYourMind';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import useCarousel from '../hooks/useCarousel';
import { useRef } from 'react';

const WhatIsOnYourMindCarousel = ({ data }) => {
  const carouselRef = useRef(null);
  const { nextDisable, nextSlide, prevDisable, prevSlide } =
    useCarousel(carouselRef);

  return (
    <div className='w-3/4 mx-auto relative z-0 top-20 mb-32'>
      <div className='flex justify-between p-4'>
        <h1 className='font-bold text-2xl'>What's on your mind? 🤔</h1>
        <div className='flex gap-3'>
          <button
            onClick={prevSlide}
            className={`p-2 rounded-full bg-gray-300 ${
              prevDisable && 'opacity-50'
            }`}
            disabled={prevDisable}
          >
            <GrFormPreviousLink size={20} />
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 rounded-full bg-gray-300 ${
              nextDisable && 'opacity-50'
            }`}
            disabled={nextDisable}
          >
            <GrFormNextLink size={20} />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className='overflow-x-auto hide-scrollbar container-carousel'
      >
        <div
          className='flex gap-3 transition-transform duration-500 '
          style={{
            transform: `translateX(-${14}%)`,
          }}
        >
          {data.info.map((d) => (
            <WhatIsOnYourMind key={d.id} image={d.imageId} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsOnYourMindCarousel;
