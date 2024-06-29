import { useDispatch, useSelector } from 'react-redux';
import { clearCart, displayCart } from '../redux/cartSlice';
import { ImCross } from 'react-icons/im';
import ShowCartItem from './ShowCartItem';

const ShowCart = () => {
  // Subscribing to required portion of store
  const items = useSelector((state) => state.cart.items);
  const viewCart = useSelector((store) => store.cart.showCart);

  // Dispatching action
  const handleShowCart = () => {
    dispatch(displayCart());
  };

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const copy = [...items];
  const cardItem = copy?.filter((item) => item?.type !== 'TopCarousel');
  return (
    viewCart && (
      <div className='sticky top-0 h-screen overflow-y-scroll shadow-2xl '>
        <div className='flex flex-col gap-3 justify-between p-4 border-b'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-2xl py-3'>My Cart</h1>
            <ImCross className='cursor-pointer mr-4' onClick={handleShowCart} />
          </div>
          {items?.length !== 0 && (
            <button
              onClick={handleClearCart}
              className='p-2 my-2 hover:opacity-90 bg-red-500 text-white rounded-md'
            >
              Clear Cart
            </button>
          )}
        </div>
        <div className='w-[500px] mb-[5.3rem]'>
          {items?.length === 0 ? (
            <div className='flex flex-col justify-center items-center'>
              <img
                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0'
                alt='empty cart'
                className='h-[250px] w-[271px]'
              />
              <span className='text-slate-700 font-semibold mt-8'>
                Your cart is empty
              </span>
            </div>
          ) : (
            <ShowCartItem c={cardItem} />
          )}
        </div>
      </div>
    )
  );
};

export default ShowCart;
