import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { styles } from '../utils/styles';
import { MdStars } from 'react-icons/md';
import { NO_IMG_AVAILABLE, TOP_RES_CHAIN_IMGs } from '../utils/constants';
import Line from '../components/Line';
import { Link } from 'react-router-dom';
import useResMenu from '../hooks/useResMenu';

const TopRestaurantChains = () => {
  const [scroll, setScroll] = useState(0);
  const { data, topRestaurantChains } = useFetch();

  const { flexBetween } = styles;
  const handleLeftClick = () => {
    scroll <= 0 ? '' : setScroll((prev) => prev - 620);
  };
  const handleRightClick = () => {
    scroll >= 4900 ? '' : setScroll((prev) => prev + 620);
    // setScroll((prev) => prev + 620);
  };

  return (
    <>
      <div className={`${flexBetween}`}>
        <h1 className={`py-[18px] pl-4 font-bold text-2xl`}>
          {data?.cards[0]?.card?.card?.header?.title.includes(
            'Top restaurant chains'
          )
            ? data?.cards[0]?.card?.card?.header?.title
            : data?.cards[1]?.card?.card?.header?.title}
        </h1>

        <div className='flex gap-2.5'>
          <button
            onClick={handleLeftClick}
            className={`rounded-full bg-slate-200 p-2.5 ${
              scroll <= 0 && 'opacity-50'
            }`}
          >
            <FaArrowLeft size={15} />
          </button>
          <button
            onClick={handleRightClick}
            className={`rounded-full bg-slate-200 p-2.5 ${
              scroll >= 4900 && 'opacity-50'
            }`}
          >
            <FaArrowRight size={15} />
          </button>
        </div>
      </div>

      <div
        style={{
          translate: `-${scroll}px`,
        }}
        className='flex gap-4 duration-500 px-4 pb-4'
      >
        {topRestaurantChains?.map((topRestaurantChain) => (
          <div
            key={topRestaurantChain?.info?.id}
            className='cursor-pointer w-[283.3px] relative flex-shrink-0 hover:scale-95 transition-transform duration-300 ease-in-out'
          >
            <Card {...topRestaurantChain} />
          </div>
        ))}
      </div>

      <Line />
    </>
  );
};

export default TopRestaurantChains;

export const Card = (topRestaurantChain) => {
  const {
    name,
    avgRating,
    avgRatingString,
    areaName,
    cloudinaryImageId,
    cuisines,
    sla: { slaString },
  } = topRestaurantChain?.info;

  return (
    <Link to={`/restaurant/${topRestaurantChain?.cta?.link?.split('/')[4]}`}>
      <div className='min-w-[244px]'>
        <img
          src={
            cloudinaryImageId
              ? TOP_RES_CHAIN_IMGs + cloudinaryImageId
              : NO_IMG_AVAILABLE
          }
          alt='restaurant'
          className='w-full h-[182px] object-cover rounded-2xl shadow-lg'
        />
      </div>
      <div
        className={`absolute w-full`}
        style={{
          top: `${2}px`,
        }}
      >
        <div className='bg-gradient-to-t from-black via-transparent to-transparent h-[180px] px-2 py-1 rounded-b-2xl flex items-end'>
          <h1 className='font-extrabold text-xl px-2 py-1 text-white'>
            {topRestaurantChain?.info?.aggregatedDiscountInfoV3?.header || ''}{' '}
            {topRestaurantChain?.info?.aggregatedDiscountInfoV3?.subHeader ||
              ''}
          </h1>
        </div>
      </div>
      <div className='ml-3 mt-3'>
        <h1 className='font-bold leading-snug'>{name}</h1>
        <div className='flex items-center'>
          <MdStars color='green' size={20} />
          <h3 className='font-semibold text-base leading-snug ml-1'>
            {avgRating || avgRatingString} · {slaString}
          </h3>
        </div>
        <p className='text-gray-500 font-light text-base leading-snug line-clamp-1'>
          {cuisines.join(', ')}
        </p>
        <p className='text-gray-500 font-light text-base leading-snug'>
          {areaName}
        </p>
      </div>
    </Link>
  );
};
