import { useEffect, useState } from 'react';

const useCarousel = (carouselRef) => {
  const [prevDisable, setPrevDisable] = useState(true);
  const [nextDisable, setNextDisable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setPrevDisable(carouselRef.current.scrollLeft <= 0);
        setNextDisable(
          carouselRef.current.scrollLeft >=
            carouselRef.current.scrollWidth - carouselRef.current.clientWidth
        );
      }
    };

    const box = carouselRef.current;
    if (box) {
      box.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (box) {
        box.removeEventListener('scroll', handleScroll);
      }
    };
  }, [carouselRef]);

  const prevSlide = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft -= width - 600;
    }
  };

  const nextSlide = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft += width - 600;
    }
  };

  return {
    prevDisable,
    nextDisable,
    prevSlide,
    nextSlide,
  };
};

export default useCarousel;
