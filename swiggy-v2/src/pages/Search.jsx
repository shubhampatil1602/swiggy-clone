import { useContext, useEffect, useState } from 'react';
import Section from '../components/Section';
import { styles } from '../utils/styles';
import { CoOrdinate } from '../contexts/locationContext';
import { CLOUDINARY_CDN_URL } from '../utils/constants';

const Search = () => {
  const {
    coOrdinate: { lat, lng },
  } = useContext(CoOrdinate);
  const [popularCuisines, setPopularCuisines] = useState(null);
  const fetchPopularCuisines = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${lat}&lng=${lng}`
    );
    const data = await response.json();
    setPopularCuisines(data?.data?.cards[1]?.card?.card);
  };
  useEffect(() => {
    fetchPopularCuisines();
  }, []);
  return (
    <Section>
      <div className='w-full md:w-[78%] mx-auto h-[48px] my-10'>
        <input
          type='search'
          placeholder='Search for restaurants and food'
          className={`px-[13px] w-full h-full border shadow rounded outline-none ${styles.flexCenter}`}
        />
      </div>
      <div className='w-full md:w-[78%] mx-auto px-4'>
        <h1 className='text-[#3d4152] font-extrabold text-[1.43rem] mb-3'>
          {popularCuisines?.header?.title}
        </h1>
        <div className='overflow-x-auto hide-scrollbar container-carousel'>
          <div className='flex gap-3 transition-transform duration-500'>
            {popularCuisines?.gridElements?.infoWithStyle?.info.map((card) => (
              <img
                key={card?.id}
                src={CLOUDINARY_CDN_URL + card?.imageId}
                alt={card?.description}
                className='h-[104.15px] w-[73.29px]'
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Search;
