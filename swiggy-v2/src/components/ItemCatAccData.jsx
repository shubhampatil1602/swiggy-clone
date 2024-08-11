import { IoStar } from 'react-icons/io5';
import { CLOUDINARY_CDN_URL, NO_IMG_AVAILABLE } from '../utils/constants';
import { Tags } from 'lucide-react';
import { PiSquareLogoFill } from 'react-icons/pi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { toast } from 'sonner';

const ItemCatAccData = ({ info, index }) => {
  // console.log(info);
  const dispatch = useDispatch();

  const [showMore, setShowMore] = useState(false);

  const addToCart = () => {
    dispatch(addItem(info));
    toast.success(
      `${info?.name.substring(0, 20).trim()}${
        info?.name.length > 19 ? '..' : ''
      } added to cart.`
    );
  };
  const handleShowMore = () => {
    setShowMore((showMore) => !showMore);
  };
  return (
    <>
      <div
        className={`flex justify-between ${
          !index && 'border-b'
        } mt-8 mb-3 px-4 pb-12`}
      >
        <div className='w-3/4'>
          <h4 className='flex gap-1'>
            <span>
              {info?.isVeg == 1 ? (
                <PiSquareLogoFill size={20} color='green' />
              ) : (
                <PiSquareLogoFill size={20} color='red' />
              )}
            </span>
            <span className='text-orange-600 text-sm font-medium'>
              {info?.isBestseller && '🌟 Bestseller'}
            </span>
          </h4>
          <h1 className='font-bold text-lg'>{info?.name}</h1>
          <div className='flex items-center py-2 gap-2'>
            <p className='font-normal text-base '>
              ₹
              {parseInt(info?.defaultPrice) / 100 ||
                parseInt(info?.price) / 100}
            </p>
            {info?.offerTags && (
              <span className='flex items-center gap-1'>
                <Tags color='green' size={20} />
                <span className='text-[#02060c99] font-bold text-xs tracking-tighter'>
                  {info?.offerTags[0]?.title} {info?.offerTags[0]?.subTitle}
                </span>
              </span>
            )}
          </div>
          {info?.ratings?.aggregatedRating?.rating > 0 && (
            <p className='flex items-center gap-1 text-sm text-gray-500'>
              <span className='text-green-700 flex items-center gap-1'>
                <span>
                  <IoStar color='green' />
                </span>
                <span>{info?.ratings?.aggregatedRating?.rating || null}</span>
              </span>
              ({info?.ratings?.aggregatedRating?.ratingCount || null})
            </p>
          )}
          <div>
            <p
              className={`text-sm font-light text-gray-600 pt-2 ${
                showMore ? '' : 'line-clamp-2'
              }`}
            >
              {info?.description}
            </p>
            {info?.description?.length > 190 && (
              <button
                onClick={handleShowMore}
                className='font-semibold text-sm text-gray-600'
              >
                {showMore ? 'less' : 'more'}
              </button>
            )}
          </div>
        </div>

        <div className='w-1/5 relative'>
          <img
            src={
              info?.imageId
                ? CLOUDINARY_CDN_URL + info?.imageId
                : NO_IMG_AVAILABLE
            }
            alt='dish'
            className='h-[130px] object-cover w-full shadow rounded-2xl border'
          />
          <div className='flex flex-col justify-center items-center absolute top-[6.6rem] left-[1.1rem]'>
            <button
              onClick={addToCart}
              className='bg-white hover:bg-gray-200 text-green-600 font-bold text-lg border mx-auto py-1 px-10 rounded-lg shadow-md'
            >
              ADD
            </button>
            <p className='text-xs font-light text-gray-500'>
              {info?.addons?.length > 0 && 'Customisable'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCatAccData;
