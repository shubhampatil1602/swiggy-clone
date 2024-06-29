import { CLOUDINARY_CDN_URL, MEME_2 } from '../utils/constants';
import { PiSquareLogoFill } from 'react-icons/pi';
import { IoStar } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { Toaster, toast } from 'sonner';

const ItemCategoryAccList = ({ c }) => {
  const dispatch = useDispatch();
  const handleAddItem = (c) => {
    // dispatch an action
    dispatch(addItem(c));
  };
  return (
    <>
      <Toaster richColors position='top-center' className='fixed top-24' />
      {c?.map((c) => (
        <div
          key={c?.card?.info?.id}
          className='flex justify-between border-b mt-8 mb-3 pb-12'
        >
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
            <p className='text-sm font-light text-gray-600 pt-2'>
              {c?.card?.info?.description?.length > 255
                ? c?.card?.info?.description?.substring(0, 255) + '...'
                : c?.card?.info?.description}
            </p>
          </div>

          <div className='w-1/5 relative'>
            <img
              src={
                c?.card?.info?.imageId == undefined
                  ? MEME_2
                  : CLOUDINARY_CDN_URL + c?.card?.info?.imageId
              }
              alt='dish'
              className='h-[130px] object-fit w-full shadow rounded-2xl border'
            />
            <div className='flex flex-col justify-center items-center absolute top-[6.6rem] left-[1.1rem]'>
              <button
                onClick={() => {
                  handleAddItem(c);
                  toast.success(`${c?.card?.info?.name} added to cart`);
                }}
                className='bg-white hover:bg-gray-200 text-green-600 font-bold text-lg border mx-auto py-1 px-10 rounded-lg shadow-md'
              >
                ADD
              </button>
              <p className='text-xs font-light text-gray-500'>
                {c?.card?.info?.addons?.length > 0 && 'Customisable'}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemCategoryAccList;
