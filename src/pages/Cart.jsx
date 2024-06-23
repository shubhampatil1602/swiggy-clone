import { useDispatch, useSelector } from 'react-redux';
import ItemCategoryAccList from '../components/ItemCategoryAccList';
import { clearCart } from '../redux/cartSlice';
import ItemCategoryCart from '../components/ItemCategoryCart';
import TopPicksCart from '../components/TopPicksCart';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const copy = [...items];
  const cardItem = copy?.filter((item) => item?.type !== 'TopCarousel');
  const topPicksCarouselCard = copy?.filter(
    (item) => item?.type === 'TopCarousel'
  );
  // console.log('topPicksCarouselCard', topPicksCarouselCard);
  return (
    <div className='w-5/6 mx-auto relative z-0 top-20'>
      <div className='flex justify-between p-4'>
        <h1 className='font-bold text-2xl'>Cart</h1>
        <button
          onClick={handleClearCart}
          className='p-2 bg-red-500 text-white rounded-md'
        >
          Clear Cart
        </button>
      </div>
      <div className='w-[600px]'>
        <ItemCategoryCart c={cardItem} />
        <TopPicksCart c={topPicksCarouselCard} />
      </div>
    </div>
  );
};

export default Cart;
