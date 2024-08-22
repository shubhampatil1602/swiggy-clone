import { Link } from 'react-router-dom';
import { NO_IMG_AVAILABLE, TOP_RES_CHAIN_IMGs } from '../utils/constants';
import { MdStars } from 'react-icons/md';

const Card = (topRestaurantChain) => {
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

export default Card;
