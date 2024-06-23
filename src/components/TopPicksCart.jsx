import {
  CLOUDINARY_CDN_URL,
  CLOUDINARY_TOP_PICKS_URL,
} from '../utils/constants';
import { PiSquareLogoFill } from 'react-icons/pi';
import { IoStar } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addItem, removeTopPicksItem } from '../redux/cartSlice';

const TopPicksCart = ({ c }) => {
  const dispatch = useDispatch();
  const handleAddItem = (c) => {
    // dispatch an action
    dispatch(addItem(c));
  };
  const handleRemoveItem = (c) => {
    dispatch(removeTopPicksItem(c));
  };
  console.log(c);

  return (
    <>
      {c?.map((c) => (
        <div
          key={c?.dish?.info?.id}
          className='flex gap-10 border-b mt-8 border rounded-2xl py-3 px-3'
        >
          <div className='w-1/3 flex justify-center items-center'>
            <img
              src={CLOUDINARY_TOP_PICKS_URL + c?.dish?.info?.imageId}
              alt='dish'
              className='h-[150px] object-fit w-full shadow rounded-2xl border'
            />
          </div>
          <div className='w-3/4'>
            <h4 className='flex gap-1'>
              <span>
                {c?.dish?.info?.isVeg == 1 ? (
                  <PiSquareLogoFill size={20} color='green' />
                ) : (
                  <PiSquareLogoFill size={20} color='red' />
                )}
              </span>
              <span className='text-orange-600 text-sm font-medium'>
                {c?.dish?.info?.isBestseller && '🌟 Bestseller'}
              </span>
            </h4>
            <h1 className='font-bold text-lg'>{c?.dish?.info?.name}</h1>
            <p className='font-normal text-base pb-2'>
              ₹
              {parseInt(c?.dish?.info?.defaultPrice) / 100 ||
                parseInt(c?.dish?.info?.price) / 100}
            </p>
            {c?.dish?.info?.ratings?.aggregatedRating?.rating > 0 && (
              <p className='flex items-center gap-1 text-sm text-gray-500'>
                <span className='text-green-700 flex items-center gap-1'>
                  <span>
                    <IoStar color='green' />
                  </span>
                  <span>
                    {c?.dish?.info?.ratings?.aggregatedRating?.rating || null}
                  </span>
                </span>
                ({c?.dish?.info?.ratings?.aggregatedRating?.ratingCount || null}
                )
              </p>
            )}
            <div className='mt-4'>
              <button
                onClick={() => handleAddItem(c)}
                className='bg-white hover:bg-gray-200 text-green-600 font-bold text-lg border mx-auto py-1 px-10 rounded-lg shadow-md mr-4'
              >
                ADD
              </button>
              <button
                onClick={() => handleRemoveItem(c?.dish?.info?.id)}
                className='bg-white hover:bg-gray-200 text-red-600 font-bold text-lg border mx-auto py-1 px-6 rounded-lg shadow-md'
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopPicksCart;
