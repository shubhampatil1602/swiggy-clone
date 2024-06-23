import { useDispatch } from 'react-redux';
import { CLOUDINARY_TOP_PICKS_URL } from '../utils/constants';
import { addItem } from '../redux/cartSlice';

const MenuCarousel = ({ c }) => {
  const dispatch = useDispatch();
  const handleAddItem = (c) => {
    dispatch(addItem(c));
  };
  return (
    <div className='flex-shrink-0 flex gap-2 border-b-[14px] border-gray-100 pb-8'>
      {c?.carousel?.map((c) => (
        <span key={c?.bannerId}>
          <div className='h-[302px] w-[294px] border rounded-2xl '>
            <img
              src={CLOUDINARY_TOP_PICKS_URL + c?.creativeId}
              alt='top picks'
            />
          </div>
          <div className='relative'>
            <div className='flex justify-between items-center absolute bottom-6 left-6 w-[250px]'>
              <p className=' text-white'>
                ₹
                {c?.dish?.info?.price / 100 ||
                  c?.dish?.info?.defaultPrice / 100}
              </p>
              <button
                onClick={() => handleAddItem(c)}
                className='bg-white hover:bg-gray-200 text-green-600 font-bold text-lg border py-1 px-10 rounded-lg shadow-md'
              >
                ADD
              </button>
            </div>
          </div>
        </span>
      ))}
    </div>
  );
};

export default MenuCarousel;
