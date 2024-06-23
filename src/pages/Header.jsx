import { useContext, useState } from 'react';
import { SiSwiggy } from 'react-icons/si';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';
import UserContext from '../contexts/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using selector.
  const cart = useSelector((store) => store.cart.items);

  return (
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
        <span className='hover:text-orange-500'>Offers</span>
        <Link to={'/about'} className='hover:text-orange-500'>
          About
        </Link>
        <Link to={'/contact'} className='hover:text-orange-500'>
          Contact
        </Link>
        <Link to={'/cart'} className='hover:text-orange-500'>
          <span className='bg-orange-500 text-white px-[8px] py-0.5 rounded-md text-sm font-bold'>
            {cart.length}
          </span>{' '}
          Cart
        </Link>
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
  );
};

export default Header;
