import { useContext, useEffect, useState } from 'react';
import Section from '../components/Section';
import { styles } from '../utils/styles';
import { CoOrdinate } from '../contexts/locationContext';
import { CLOUDINARY_CDN_URL, NO_IMG_AVAILABLE } from '../utils/constants';
import { IoStar } from 'react-icons/io5';
import { GoArrowRight } from 'react-icons/go';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Search = () => {
  const {
    coOrdinate: { lat, lng },
  } = useContext(CoOrdinate);

  const [popularCuisines, setPopularCuisines] = useState(null);
  const [searchString, setSearchString] = useState('');
  const [activeFilterBtn, setActiveFilterBtn] = useState('Dishes');
  const [dishes, setDishes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const filterButtons = ['Restaurants', 'Dishes'];
  const handleFilterBtn = (name) => {
    setActiveFilterBtn(activeFilterBtn === name ? activeFilterBtn : name);
  };

  const DISHES = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchString}&trackingId=08f2a739-4cae-4a2f-d1a2-5613f984502c&submitAction=ENTER&queryUniqueId=4af12564-0fb2-3e59-f51d-4c8688ac79a8`;
  const RESTAURANTS = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchString}&trackingId=undefined&submitAction=ENTER&queryUniqueId=598d9b3f-20f8-b107-792d-c34527a7f05f&selectedPLTab=RESTAURANT`;
  const fetchPopularCuisines = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${lat}&lng=${lng}`
    );
    const data = await response.json();
    setPopularCuisines(data?.data?.cards[1]?.card?.card);
  };

  const searchSuggestion = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${lng}&str=${searchString}&trackingId=undefined&includeIMItem=true`
    );
    const data = await response.json();
    console.log('searchSuggestion', data);
  };

  const fetchDishes = async () => {
    const response = await fetch(DISHES);
    const data = await response.json();
    console.log(
      'fetchDishes',
      data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.filter(
        (data) => data?.card?.card?.info
      )
    );
    setDishes(
      data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.filter(
        (data) => data?.card?.card?.info
      )
    );
  };
  const fetchRestaurants = async () => {
    const response = await fetch(RESTAURANTS);
    const data = await response.json();
    console.log(
      'fetchRestaurants',
      data?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
    setRestaurants(
      data?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  useEffect(() => {
    let id = null;
    id = setTimeout(() => {
      fetchPopularCuisines();
      fetchDishes();
      fetchRestaurants();
    }, 300);
    return () => clearTimeout(id);
  }, [searchString]);
  return (
    <Section>
      <div className='w-full lg:w-[78%] mx-auto h-[48px] my-10'>
        <input
          type='search'
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder='Search for restaurants and food'
          className={`px-[13px] w-full h-full border border-gray-300 shadow rounded outline-none ${styles.flexCenter}`}
        />
      </div>
      {!searchString && (
        <div className='w-full lg:w-[78%] mx-auto px-4'>
          <h1 className='text-[#3d4152] font-extrabold text-[1.43rem] mb-3'>
            {popularCuisines?.header?.title}
          </h1>
          <div className='overflow-x-auto hide-scrollbar container-carousel'>
            <div className='flex gap-3 transition-transform duration-500'>
              {popularCuisines?.gridElements?.infoWithStyle?.info.map(
                (card) => (
                  <img
                    key={card?.id}
                    src={CLOUDINARY_CDN_URL + card?.imageId}
                    alt={card?.description}
                    className='h-[104.15px] w-[73.29px] cursor-pointer'
                    onClick={() =>
                      setSearchString(card?.action?.link.split('=')[1])
                    }
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-wrap gap-3 mt-2 mb-6 w-full lg:w-[78%] mx-auto'>
        {filterButtons.map((btn) => (
          <button
            key={btn}
            className={`${styles.searchFilterBtn} ${
              activeFilterBtn === btn
                ? 'bg-[#02060cbf] text-[#f0f0f5]'
                : 'bg-white'
            }`}
            onClick={() => handleFilterBtn(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className='w-full lg:w-[78%] mx-auto justify-center flex gap-x-3.5 gap-y-5 flex-wrap bg-[#f3f4f6] pt-6'>
        {activeFilterBtn === 'Dishes'
          ? dishes?.map((dish) => (
              <div
                className='bg-white w-[410px] rounded-3xl px-3 pt-6 pb-8'
                key={dish?.card?.card?.info?.id}
              >
                <div className='text-[#686b78] mx-2 border-[#bebfc5] border-b border-dotted mb-4 pb-4 flex items-center justify-between'>
                  <div>
                    <h2 className='text-[13px] font-semibold'>
                      By {dish?.card?.card?.restaurant?.info?.name}
                    </h2>
                    <p className='flex items-center gap-1 text-[12.02px] font-light'>
                      <IoStar />
                      {dish?.card?.card?.restaurant?.info?.avgRating} .{' '}
                      {dish?.card?.card?.restaurant?.info?.sla?.slaString}
                    </p>
                  </div>
                  <GoArrowRight size={25} />
                </div>
                <div className=' flex justify-between'>
                  <div className='max-w-[56%] pl-2'>
                    <h3 className='mt-2 mb-1 text-[16px] leading-tight font-semibold'>
                      {dish?.card?.card?.info?.name}
                    </h3>
                    <p className='text-sm font-semibold mb-3'>
                      ₹
                      {dish?.card?.card?.info?.defaultPrice / 100 ||
                        dish?.card?.card?.info?.price / 100}
                    </p>
                    <button className='w-[108.16px] h-[27.8px] border border-[#dededf] rounded-full text-[#676A6D] flex justify-center items-center'>
                      <span className='text-xs font-medium'>More Details</span>
                      <MdOutlineKeyboardArrowRight size={18} />
                    </button>
                  </div>
                  <div className='relative'>
                    <img
                      src={
                        dish?.card?.card?.info?.imageId
                          ? CLOUDINARY_CDN_URL + dish?.card?.card?.info?.imageId
                          : NO_IMG_AVAILABLE
                      }
                      alt='dish'
                      className='h-[130px] w-[154px] object-cover shadow rounded-2xl border'
                    />
                    <div className='flex flex-col justify-center items-center absolute top-[6.6rem] left-[1.1rem]'>
                      <button className='bg-white hover:bg-gray-200 text-green-600 font-bold text-lg border mx-auto py-1 px-10 rounded-lg shadow-md'>
                        ADD
                      </button>
                      <p className='text-xs font-light text-gray-500'>
                        {dish?.card?.card?.info?.addons?.length > 0 &&
                          'Customisable'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : restaurants?.map((dish) => (
              <div
                className='bg-white w-[410px] px-3 pt-6 pb-8'
                key={dish?.card?.card?.info?.id}
              >
                <div className='relative'>
                  <img
                    src={
                      dish?.card?.card?.info?.cloudinaryImageId
                        ? CLOUDINARY_CDN_URL +
                          dish?.card?.card?.info?.cloudinaryImageId
                        : NO_IMG_AVAILABLE
                    }
                    alt='dish'
                    className='h-[88px] w-[96px] object-cover shadow rounded-2xl border'
                  />
                  {dish?.card?.card?.info?.aggregatedDiscountInfoV3 && (
                    <div className='flex flex-col justify-center items-center absolute top-[4.2rem] left-[0.6rem] min-w-[80px]'>
                      <button className='bg-white text-lg border mx-auto py-1 px-3 flex justify-center items-center rounded-lg shadow-md text-[#ff5200] flex-col leading-tight'>
                        <span className='font-extrabold text-[10px]'>
                          {
                            dish?.card?.card?.info?.aggregatedDiscountInfoV3
                              ?.header
                          }
                        </span>
                        <span className='text-[8px]'>
                          ·{' '}
                          {
                            dish?.card?.card?.info?.aggregatedDiscountInfoV3
                              ?.subHeader
                          }
                        </span>
                      </button>
                    </div>
                  )}
                </div>
                <div className='text-[#686b78] mx-2 mb-4 pb-4 flex items-center justify-between'>
                  <div>
                    <h2 className='text-[13px] font-semibold'>
                      {dish?.card?.card?.info?.name}
                    </h2>
                    <p className='flex items-center gap-1 text-[12.02px] font-light'>
                      <IoStar />
                      {dish?.card?.card?.info?.avgRating} .{' '}
                      {dish?.card?.card?.info?.sla?.slaString} . ₹
                      {dish?.card?.card?.info?.costForTwoMessage}
                    </p>
                    <p className=''>
                      {dish?.card?.card?.info?.cuisines?.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </Section>
  );
};

export default Search;
