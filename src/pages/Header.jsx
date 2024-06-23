import { useState } from 'react';
import { SiSwiggy } from 'react-icons/si';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const onlineStatus = useOnlineStatus();

  return (
    <div className='flex fixed z-10 w-full justify-between py-4 boxShadow bg-white'>
      <Link to={'/'} className='flex justify-center items-center mx-32'>
        <SiSwiggy
          size={49}
          className='text-orange-500 hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out'
        />
      </Link>
      <div className='flex items-center gap-12 mx-32'>
        <p className='hover:text-orange-500'>
          {onlineStatus ? '🟢 Online ' : '🔴 Offline'}
        </p>
        <p className='hover:text-orange-500'>Offers</p>
        <Link to={'/about'} className='hover:text-orange-500'>
          About
        </Link>
        <Link to={'/contact'} className='hover:text-orange-500'>
          Contact
        </Link>
        <p className='hover:text-orange-500'>Cart</p>
        <p
          className='cursor-pointer w-[51px] hover:text-orange-500'
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? 'Login' : 'Logout'}
        </p>
      </div>
    </div>
  );
};

export default Header;
