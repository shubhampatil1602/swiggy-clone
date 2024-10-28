import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { toast } from 'sonner';
import { useState } from 'react';

const AddToCartButton = ({ info, length }) => {
  const [infoState, setInfoState] = useState(() => {
    // Initialize state from localStorage
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const dispatch = useDispatch();

  const addToCart = () => {
    const updatedInfoState = [...infoState, info];
    setInfoState(updatedInfoState);

    // Update localStorage with the new state
    localStorage.setItem('cartItems', JSON.stringify(updatedInfoState));

    dispatch(addItem(info));
    toast.success(
      `${info?.name.substring(0, 20).trim()}${
        info?.name.length > 19 ? '..' : ''
      } added to cart.`
    );
  };
  return (
    <div className='flex flex-col justify-center items-center absolute top-[6.6rem] left-[1.1rem]'>
      <button
        onClick={addToCart}
        className='bg-white hover:bg-gray-200 text-green-600 font-bold text-lg border mx-auto py-1 px-10 rounded-lg shadow-md'
      >
        ADD
      </button>
      <p className='text-xs font-light text-gray-500'>
        {length > 0 && 'Customisable'}
      </p>
    </div>
  );
};

export default AddToCartButton;
