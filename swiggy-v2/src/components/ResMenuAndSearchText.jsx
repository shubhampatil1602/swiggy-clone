import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ResMenuAndSearchText = () => {
  return (
    <>
      <div className='p-6 mt-5'>
        <h2 className='text-sm text-center w-[97%] font-normal tracking-[0.3em] text-gray-500'>
          - MENU -
        </h2>
      </div>
      <Link
        to={'/'}
        className='flex items-center p-4 mb-8 bg-[#02060c0d] rounded-2xl'
      >
        <span className='w-[97%] text-center text-sm font-semibold text-gray-500'>
          Search for dishes
        </span>
        <span>
          <IoIosSearch size={20} />
        </span>
      </Link>
    </>
  );
};

export default ResMenuAndSearchText;
