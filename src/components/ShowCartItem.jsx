import { CLOUDINARY_CDN_URL, MEME_2 } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, removeSingleItem } from '../redux/cartSlice';
import TotalCartSummary from './TotalCartSummary';

const ShowCartItem = ({ c }) => {
  const dispatch = useDispatch();
  const handleAddItem = (c) => {
    // dispatch an action
    dispatch(addItem(c));
  };
  const handleRemoveSingleItem = (c) => {
    // dispatch an action
    dispatch(removeSingleItem(c));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <>
      {c?.map((c) => (
        <div
          key={c?.card?.info?.id}
          className='flex gap-5 border-b mt-2 py-3 px-3'
        >
          <div className='w-1/3 flex justify-center items-center'>
            <img
              src={
                c?.card?.info?.imageId == undefined
                  ? MEME_2
                  : CLOUDINARY_CDN_URL + c?.card?.info?.imageId
              }
              alt='dish'
              className='h-[100px] object-fit w-[120px] shadow rounded-2xl border'
            />
          </div>
          <div className='w-3/4'>
            <h1 className='font-bold text-base'>
              {c?.quantity} X {c?.card?.info?.name}
            </h1>
            <p className='font-medium text-base pb-2'>
              ₹
              {parseFloat(
                (c?.card?.info?.defaultPrice / 100) * c?.quantity.toFixed(2)
              ) ||
                parseFloat(
                  (c?.card?.info?.price / 100) * c?.quantity.toFixed(2)
                )}{' '}
              <span className='text-slate-500 font-light text-sm'>
                (
                {parseFloat(
                  c?.card?.info?.defaultPrice / 100 +
                    'X' +
                    c?.quantity.toFixed(2)
                ) ||
                  parseFloat(
                    c?.card?.info?.price / 100 + 'X' + c?.quantity.toFixed(2)
                  )}{' '}
                X {c?.quantity})
              </span>
            </p>

            <div className=' w-full flex justify-between'>
              <span className='bg-white flex justify-between items-center gap-3 font-bold text-base py-1 mr-4'>
                <button
                  onClick={() => handleRemoveSingleItem(c)}
                  className='text-white bg-orange-500 hover:bg-orange-400 font-semibold text-xl py-0.5 px-3 rounded-md '
                >
                  -
                </button>
                {c?.quantity}
                <button
                  onClick={() => handleAddItem(c)}
                  className='text-white bg-orange-500 hover:bg-orange-400 font-semibold text-xl py-0.5 px-3 rounded-md '
                >
                  +
                </button>
              </span>

              <button
                onClick={() => handleRemoveItem(c?.card?.info?.id)}
                className='bg-white hover:bg-gray-200 text-red-600 font-medium text-lg border border-red-600 py-1 px-6 rounded-lg shadow-md'
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <TotalCartSummary c={c} />
    </>
  );
};

export default ShowCartItem;
