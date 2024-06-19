import { MdStars } from 'react-icons/md';
import { CLOUDINARY_CDN_URL } from '../utils/constants';

export default function TopRestaurant({ r, sty }) {
  return (
    <div className='cursor-pointer w-[283.3px] relative flex-shrink-0 hover:scale-95 transition-transform duration-300 ease-in-out'>
      <div className='w-full'>
        <img
          src={CLOUDINARY_CDN_URL + r?.info?.cloudinaryImageId}
          alt='restaurant'
          className='w-full h-[182px] object-cover rounded-2xl shadow-lg'
        />
      </div>
      <div
        className={`absolute w-full`}
        style={{
          bottom: `${sty}px`,
        }}
      >
        <div className='bg-gradient-to-t from-black via-transparent to-transparent h-[180px] px-2 py-1 rounded-b-2xl flex items-end'>
          <h1 className='font-extrabold text-xl px-2 py-1 text-white'>
            {r?.info?.aggregatedDiscountInfoV3 === undefined
              ? ''
              : r?.info?.aggregatedDiscountInfoV3?.header +
                ' ' +
                r?.info?.aggregatedDiscountInfoV3?.subHeader}
          </h1>
        </div>
      </div>
      <div className='ml-3 mt-3'>
        <h1 className='font-bold leading-snug'>
          {r?.info?.name?.length > 30
            ? r?.info?.name.substring(0, 29) + '..'
            : r?.info?.name}
        </h1>
        <div className='flex items-center'>
          <MdStars color='green' size={20} />
          <h3 className='font-semibold text-base leading-snug ml-1'>
            {r?.info?.avgRating || r?.info?.avgRatingString} ·{' '}
            {r?.info?.sla?.slaString}
          </h3>
        </div>
        <p className='text-gray-500 font-light text-base leading-snug'>
          {r?.info?.cuisines?.length >= 3
            ? r?.info?.cuisines?.slice(0, 3).join(', ') + '..'
            : r?.info?.cuisines}
        </p>
        <p className='text-gray-500 font-light text-base leading-snug'>
          {r?.info?.areaName}
        </p>
      </div>
    </div>
  );
}
