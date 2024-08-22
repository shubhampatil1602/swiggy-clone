import { Link } from 'react-router-dom';

const MenuPath = ({ info }) => {
  return (
    <div className='text-[10px] my-7 pl-1'>
      <Link to='/' className='text-gray-400 hover:text-black'>
        Home
      </Link>
      <span className='mx-1.5 text-gray-400'>/</span>
      <span className='text-gray-400 hover:text-black'>{info?.city}</span>
      <span className='mx-1.5 text-gray-400'>/</span>
      <span>{info?.name}</span>
    </div>
  );
};

export default MenuPath;
