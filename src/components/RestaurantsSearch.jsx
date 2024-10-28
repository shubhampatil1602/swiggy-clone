import { IoStar } from 'react-icons/io5';
import { CLOUDINARY_CDN_URL, NO_IMG_AVAILABLE } from '../utils/constants';

const RestaurantsSearch = ({ dish }) => {
  return (
    <div className='bg-white w-[410px] pl-3 pr-1 pt-6 pb-8 flex'>
      <div className='relative w-[100px]'>
        <img
          src={
            dish?.card?.card?.info?.cloudinaryImageId
              ? CLOUDINARY_CDN_URL + dish?.card?.card?.info?.cloudinaryImageId
              : NO_IMG_AVAILABLE
          }
          alt='dish'
          className='h-[96px] w-[88px] object-cover shadow rounded-2xl'
        />
        {dish?.card?.card?.info?.promoted && (
          <span className='bg-[#3e4152] w-[23.85px] h-[18.45px] text-white text-[12.04px] pr-[5px] py-[1px] pl-1 rounded absolute top-[0.25rem] left-0 font-light'>
            Ad
          </span>
        )}
        {dish?.card?.card?.info?.aggregatedDiscountInfoV3 && (
          <div className='flex flex-col justify-center items-center absolute top-[4.5rem] left-[0.3rem] min-w-[80px]'>
            <button className='bg-white text-lg border mx-auto py-1 px-2 flex justify-center items-center rounded-lg shadow-md text-[#ff5200] flex-col leading-tight'>
              <span className='font-[900] text-[13px] tracking-tighter'>
                {dish?.card?.card?.info?.aggregatedDiscountInfoV3?.header}
              </span>
              <span className='text-[8px]'>
                · {dish?.card?.card?.info?.aggregatedDiscountInfoV3?.subHeader}
              </span>
            </button>
          </div>
        )}
      </div>
      <div className='mr-2 ml-4 mb-4 pb-4 flex items-center justify-between gap-y-1 w-[280px] h-full'>
        <div className='w-full flex flex-col gap-1'>
          <h2 className='text-[13px] font-semibold'>
            {dish?.card?.card?.info?.name}
          </h2>
          <p className='flex items-center gap-1 text-[12.02px] font-medium text-[#686b78]'>
            <IoStar />
            {dish?.card?.card?.info?.avgRating} ·{' '}
            {dish?.card?.card?.info?.sla?.slaString} ·{' '}
            {dish?.card?.card?.info?.costForTwoMessage}
          </p>
          <p className='text-[#93959f] text-xs font-light line-clamp-1'>
            {dish?.card?.card?.info?.cuisines?.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsSearch;
