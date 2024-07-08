import { useContext, useState } from 'react';
import { SiSwiggy } from 'react-icons/si';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';
import UserContext from '../contexts/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { displayCart } from '../redux/cartSlice';
import ShowCart from '../components/ShowCart';

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const dispatch = useDispatch();

  // Subscribing to the store using selector.
  const cart = useSelector((store) => store.cart.items);
  const viewCart = useSelector((store) => store.cart.showCart);

  // Dispatching action
  const handleShowCart = () => {
    dispatch(displayCart());
  };

  return (
    <>
      <div className='flex fixed z-10 w-full justify-between py-4 boxShadow bg-white'>
        <Link to={'/'} className='flex justify-center items-center mx-32'>
          <SiSwiggy
            size={49}
            className='text-orange-500 hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out'
          />
        </Link>
        <div className='flex items-center gap-12 mx-32'>
          <span className='font-bold text-orange-500'>{loggedInUser}</span>
          <span className='hover:text-orange-500'>
            {onlineStatus ? '🟢 Online ' : '🔴 Offline'}
          </span>
          <Link to={'/search'} className='hover:text-orange-500'>
            Search
          </Link>
          <Link to={'/about'} className='hover:text-orange-500'>
            About
          </Link>
          <Link to={'/contact'} className='hover:text-orange-500'>
            Contact
          </Link>
          {/* <Link to={'/cart'} className='hover:text-orange-500'>
            <span className='bg-orange-500 text-white px-[8px] py-0.5 rounded-md text-sm font-bold'>
              {cart.length}
            </span>{' '}
            Cart
          </Link> */}
          <span
            className='flex gap-1 cursor-pointer w-[51px] hover:text-orange-500'
            onClick={handleShowCart}
          >
            <span className='bg-orange-500 text-white px-[8px] py-0.5 rounded-md text-sm font-bold'>
              {cart.length}
            </span>{' '}
            <span> Cart</span>
          </span>
          <span
            className='cursor-pointer w-[51px] hover:text-orange-500'
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? 'Login' : 'Logout'}
          </span>
        </div>
      </div>
      {viewCart && (
        <div className='fixed border h-screen bg-white right-0 z-50'>
          <ShowCart />
        </div>
      )}
    </>
  );
};

export default Header;
