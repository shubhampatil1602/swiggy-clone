import { SiSwiggy } from 'react-icons/si';
import { styles } from '../utils/styles';
import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import { MdCallMade } from 'react-icons/md';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Visibility } from '../contexts/locationContext';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { visibility, setVisibility } = useContext(Visibility);
  const { flexCenter, flexBetween, navLink, responsiveNavLink } = styles;

  const handleConfigDriven = () => {
    setVisibility((visibility) => !visibility);
  };

  const handleVisibility = () => {
    setVisibility((visibility) => !visibility);
  };

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <div className='relative'>
      <div className='h-full'>
        <div
          onClick={handleVisibility}
          className={`absolute z-20 bg-[#08081a]/55 h-full w-full ${
            visibility ? 'visible' : 'invisible'
          }`}
        ></div>
        <div
          className={`absolute duration-[550ms] bg-white h-full w-full sm:w-[70%] md:w-[70%] lg:w-[37%] z-30 ${
            visibility ? 'left-0' : '-left-full'
          }`}
        >
          <div className='w-[80%] h-full ml-auto'>
            <button onClick={handleVisibility} className='mt-4'>
              <RxCross2 size={30} />
            </button>
            <div className='mt-4'>
              <input
                type='search'
                className='outline-none border shadow-md px-4 py-3 w-[90%] caret-orange-500'
                placeholder='Search your city...'
              />
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`w-full bg-white h-20 ${flexCenter}`}
        style={{
          boxShadow: '0 15px 40px -20px rgba(40, 44, 63, 0.15)',
        }}
      >
        <div className={`w-[80%] ${flexBetween}`}>
          <div className='flex items-center gap-9'>
            <Link to={'/'}>
              <SiSwiggy
                size={49}
                className='text-orange-500 hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out'
              />
            </Link>
            <div
              className='flex gap-3 cursor-pointer'
              onClick={handleVisibility}
            >
              <span className='font-bold text-xs border-b-2 pb-0.5 tracking-wide border-black hover:text-orange-500 hover:border-orange-500'>
                Other
              </span>
              <IoIosArrowDown color='#F87315' size={20} />
            </div>
          </div>

          <div className={`hidden md:flex md:${flexCenter} gap-12`}>
            <div className={`${flexCenter} gap-2 ${navLink}`}>
              <FiSearch size={20} />
              <span>Search</span>
            </div>

            <div className={`${flexCenter} gap-2 ${navLink}`}>
              <MdCallMade size={17} />
              <span>Contact</span>
            </div>

            <div className={`${flexCenter} gap-2 ${navLink}`}>
              <FaRegUser size={17} />
              <span>Sign in</span>
            </div>

            <div className={`${flexCenter} gap-2 ${navLink}`}>
              <BsCart3 size={17} />
              <span>Cart 0</span>
            </div>
          </div>

          <div className='md:hidden'>
            <span className='cursor-pointer' onClick={handleToggle}>
              <RxHamburgerMenu size={30} />
            </span>
          </div>
        </div>

        {toggle && (
          <div className='md:hidden shadow absolute top-20 right-10 z-10 border rounded flex flex-col justify-evenly bg-white'>
            <div
              className={`${flexCenter} gap-2 ${responsiveNavLink} py-4 px-10`}
            >
              <FiSearch size={20} />
              <span>Search</span>
            </div>
            <div
              className={`${flexCenter} gap-2 ${responsiveNavLink} py-4 px-10`}
            >
              <MdCallMade size={17} />
              <span>Contact</span>
            </div>
            <div
              className={`${flexCenter} gap-2 ${responsiveNavLink} py-4 px-10`}
            >
              <FaRegUser size={17} />
              <span>Sign in</span>
            </div>
            <div
              className={`${flexCenter} gap-2 ${responsiveNavLink} py-4 px-10`}
            >
              <BsCart3 size={17} />
              <span>Cart 0</span>
            </div>
          </div>
        )}
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
