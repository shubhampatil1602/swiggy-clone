import { CLOUDINARY_CDN_URL, MEME_2 } from '../utils/constants';
import { PiSquareLogoFill } from 'react-icons/pi';
import { IoStar } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartSlice';

const ItemCategoryCart = ({ c }) => {
  const dispatch = useDispatch();
  const handleAddItem = (c) => {
    // dispatch an action
    dispatch(addItem(c));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <>
      {c?.map((c) => (
        <div
          key={c?.card?.info?.id}
          className='flex gap-10 border-b mt-8 border rounded-2xl py-3 px-3'
        >
          <div className='w-1/3 flex justify-center items-center'>
            <img
              src={
                c?.card?.info?.imageId == undefined
                  ? MEME_2
                  : CLOUDINARY_CDN_URL + c?.card?.info?.imageId
              }
              alt='dish'
              className='h-[150px] object-fit w-full shadow rounded-2xl border'
            />
          </div>
          <div className='w-3/4'>
            <h4 className='flex gap-1'>
              <span>
                {c?.card?.info?.isVeg == 1 ? (
                  <PiSquareLogoFill size={20} color='green' />
                ) : (
                  <PiSquareLogoFill size={20} color='red' />
                )}
              </span>
              <span className='text-orange-600 text-sm font-medium'>
                {c?.card?.info?.isBestseller && '🌟 Bestseller'}
              </span>
            </h4>
            <h1 className='font-bold text-lg'>{c?.card?.info?.name}</h1>
            <p className='font-normal text-base pb-2'>
              ₹
              {parseInt(c?.card?.info?.defaultPrice) / 100 ||
                parseInt(c?.card?.info?.price) / 100}
            </p>
            {c?.card?.info?.ratings?.aggregatedRating?.rating > 0 && (
              <p className='flex items-center gap-1 text-sm text-gray-500'>
                <span className='text-green-700 flex items-center gap-1'>
                  <span>
                    <IoStar color='green' />
                  </span>
                  <span>
                    {c?.card?.info?.ratings?.aggregatedRating?.rating || null}
                  </span>
                </span>
                ({c?.card?.info?.ratings?.aggregatedRating?.ratingCount || null}
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
                onClick={() => handleRemoveItem(c?.card?.info?.id)}
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

export default ItemCategoryCart;
