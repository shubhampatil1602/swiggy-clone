import { CLOUDINARY_CDN_URL, MEME_2 } from '../utils/constants';

export const AccordianCardDishes = ({ details }) => {
  return (
    <>
      <div className='border flex'>
        <div className='w-4/5'>
          <h4>{details?.card?.info?.isVeg == 1 ? 'Veg' : 'Non veg'}</h4>
          <h1 className='font-semibold text-lg'>{details?.card?.info?.name}</h1>
          <p className='font-semibold'>
            ₹
            {parseInt(details?.card?.info?.defaultPrice) / 100 ||
              parseInt(details?.card?.info?.price) / 100}
          </p>
          <p>
            {details?.card?.info?.ratings?.aggregatedRating?.rating} stars{' '}
            {details?.card?.info?.ratings?.aggregatedRating?.ratingCount}
          </p>
          <p className='text-sm text-gray-500'>
            {details?.card?.info?.description}
          </p>
        </div>
        <div className=''>
          <img
            src={
              details?.card?.info?.imageId == undefined
                ? MEME_2
                : CLOUDINARY_CDN_URL + details?.card?.info?.imageId
            }
            alt='dish'
            className='h-[100px]'
          />
        </div>
      </div>
    </>
  );
};
