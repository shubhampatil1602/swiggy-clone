import { SiSwiggy } from 'react-icons/si';
import { styles } from '../utils/styles';
import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import { MdCallMade } from 'react-icons/md';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { CoOrdinate } from '../contexts/locationContext';
import { GoLocation } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { locationToggleFn } from '../redux/toggleSlice';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [cityData, setCityData] = useState([]);
  const [add, setAdd] = useState('Bengaluru');
  const navigate = useNavigate();
  const { setCoOrdinate } = useContext(CoOrdinate);
  const { flexCenter, flexBetween, navLink, responsiveNavLink } = styles;

  const visibility = useSelector(
    (state) => state.locationSearchToggleSlice.locationSearchToggle
  );
  const cartItems = useSelector((state) => state.cartSlice.items);

  const dispatch = useDispatch();

  const searchCity = async (city) => {
    const res = await fetch(
      'https://www.swiggy.com/dapi/misc/place-autocomplete?input=' + city
    );
    const data = await res.json();
    setCityData(data?.data);
  };

  const fetchLatLng = async (placeId) => {
    const res = await fetch(
      'https://www.swiggy.com/dapi/misc/address-recommend?place_id=' + placeId
    );
    const data = await res.json();
    setCoOrdinate({
      lat: data?.data[0]?.geometry?.location?.lat,
      lng: data?.data[0]?.geometry?.location?.lng,
    });
    setAdd(data?.data[0]?.formatted_address);
    navigate('/');
  };

  const handleVisibility = () => {
    dispatch(locationToggleFn());
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
                onChange={(e) => searchCity(e.target.value)}
              />

              <div className='w-[90%] px-5 py-6'>
                <ul>
                  {cityData?.map((data, index) => {
                    const isLast = index === cityData?.length - 1;
                    return (
                      <li
                        key={data?.place_id}
                        onClick={() => {
                          fetchLatLng(data?.place_id);
                          handleVisibility();
                        }}
                        className='flex gap-4 cursor-pointer'
                      >
                        <div className='pt-7'>
                          <GoLocation size={20} />
                        </div>
                        <div
                          className={`flex flex-col ${
                            !isLast && 'border-b border-[#BBBCC2] border-dashed'
                          } py-5 w-full`}
                        >
                          <span className='font-medium text-[#282c3f] text-base hover:text-orange-500'>
                            {data?.structured_formatting?.main_text}
                          </span>
                          <span className='text-[#93959f] text-[13px] font-extralight'>
                            {data?.structured_formatting?.secondary_text}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
        <div className={`w-[90%] sm:w-[80%] ${flexBetween}`}>
          <div className='flex items-center gap-2 sm:gap-9'>
            <Link to={'/'}>
              <SiSwiggy
                size={49}
                className='text-orange-500 hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out'
              />
            </Link>
            <div
              className='flex gap-1.5 sm:gap-3 cursor-pointer'
              onClick={handleVisibility}
            >
              <span className='font-bold text-xs border-b-2 pb-0.5 line-clamp-1 tracking-wide border-black hover:text-orange-500 hover:border-orange-500'>
                {add?.split(', ')[0]}{' '}
              </span>
              <span className='font-light text-xs text-[#686b78] max-w-[100px] line-clamp-1'>
                {add?.slice(0, 50)}
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
              <Link to={'/cart'}>Cart {cartItems?.length}</Link>
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
              <Link to={'/cart'}>Cart {cartItems?.length}</Link>
            </div>
          </div>
        )}
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
