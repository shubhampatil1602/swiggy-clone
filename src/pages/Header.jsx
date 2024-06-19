import { SiSwiggy } from 'react-icons/si';

const Header = () => {
  return (
    <div className='flex fixed z-10 w-full justify-between py-4 boxShadow bg-white'>
      <div className='flex justify-center items-center mx-32'>
        <SiSwiggy
          size={49}
          className='text-orange-500 hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out'
        />
      </div>
      <div className='flex items-center gap-12 mx-32'>
        <p>Offers</p>
        <p>Help</p>
        <p>Sign in</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
