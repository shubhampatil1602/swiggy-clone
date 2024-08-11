import { useDispatch, useSelector } from 'react-redux';
import Section from '../components/Section';
import { CLOUDINARY_CDN_URL, NO_IMG_AVAILABLE } from '../utils/constants';
import { PiSquareLogoFill } from 'react-icons/pi';
import {
  addItem,
  clearCart,
  removeSingleItem,
  removeSingleItemQuantity,
} from '../redux/cartSlice';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const Cart = () => {
  const items = useSelector((state) => state.cartSlice.items);
  const total = useSelector((state) => state.cartSlice.total);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success('Cart cleared.');
  };

  return items?.length === 0 ? (
    <Section>
      <div className='h-[90vh] flex gap-6 flex-col items-center justify-center'>
        <img
          src='/empty_cart.png'
          alt='empty cart.'
          className='h-72 sm:h-80 w-80 mx-auto'
        />
        <button className='uppercase bg-[#ff5200] font-semibold py-[11px] px-[20px] text-white text-[16px] tracking-[0.010em]'>
          <Link to={'/'}>See restaurants near you</Link>
        </button>
      </div>
    </Section>
  ) : (
    <Section>
      {items?.length > 0 && (
        <div className='flex justify-end mt-4'>
          <button
            onClick={handleClearCart}
            className='bg-red-500 text-white font-bold text-lg border w-[100px] sm:w-[130px] h-[40px] shadow-md flex justify-center items-center'
          >
            Clear Cart
          </button>
        </div>
      )}
      {items?.map((info) => (
        <div
          key={info.id}
          className='w-full h-[100px] flex items-center shadow my-2'
        >
          <div className='w-full flex items-center'>
            <div className='h-[80px] w-[80px]'>
              <img
                src={
                  info?.imageId
                    ? CLOUDINARY_CDN_URL + info?.imageId
                    : NO_IMG_AVAILABLE
                }
                alt='dish'
                className='h-full w-full object-cover shadow border'
              />
            </div>
            <div className={`flex flex-col justify-between items-start px-4`}>
              <div className='flex items-center gap-1'>
                {info?.isVeg == 1 ? (
                  <PiSquareLogoFill size={20} color='green' />
                ) : (
                  <PiSquareLogoFill size={20} color='red' />
                )}

                <h1 className='font-semibold text-sm sm:text-base'>
                  {info?.quantity}x {info?.name}
                </h1>
              </div>
              <div className='flex items-center gap-2'>
                <p className='font-normal text-sm '>
                  ₹
                  {info?.quantity *
                    (info?.defaultPrice / 100 || info?.price / 100)}
                </p>
              </div>
            </div>
          </div>

          <button className='bg-white text-green-600 font-bold text-lg border w-[100px] sm:w-[130px] h-[40px] shadow-md flex justify-between items-center'>
            <span
              onClick={() => {
                dispatch(removeSingleItemQuantity(info));
              }}
              className='px-4 hover:scale-125 duration-200 text-gray-500'
            >
              -
            </span>
            <span>{info?.quantity}</span>
            <span
              onClick={() => dispatch(addItem(info))}
              className='px-4 hover:scale-125 duration-200'
            >
              +
            </span>
          </button>
          <button
            className='bg-white ml-3 text-red-600 font-bold text-lg border w-[40px] h-[40px] shadow-md flex justify-center items-center'
            onClick={() => {
              dispatch(removeSingleItem(info));
              toast.success(
                `${info?.name.substring(0, 20).trim()}${
                  info?.name.length > 19 ? '..' : ''
                } removed from cart.`
              );
            }}
          >
            X
          </button>
        </div>
      ))}

      {items?.length > 0 && (
        <div className='flex justify-between mt-8'>
          <p className='font-semibold'>TO PAY</p>
          <h2 className='font-semibold'>₹{total}</h2>
        </div>
      )}
    </Section>
  );
};

export default Cart;
