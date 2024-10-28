import { PiSquareLogoFill } from 'react-icons/pi';
import AddToCartButton from './AddToCartButton';
import { X } from 'lucide-react';

const ResDetailModal = ({
  image,
  description,
  name,
  price,
  isVeg,
  setShowDetailsModal,
  showDetailsModal,
  dish,
}) => {
  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
      onClick={() => setShowDetailsModal(false)}
    >
      <div
        className='bg-white w-[500px] h-[600px] shadow-lg rounded-3xl relative'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='w-full h-[400px]'>
          <img
            src={image}
            alt='Modal Content'
            className='w-full h-full object-cover rounded-t-3xl'
          />
          <button
            onClick={() => setShowDetailsModal(false)}
            className='bg-white rounded-full absolute z-[60] top-5 right-4 h-[28px] w-[28px] flex justify-center items-center'
          >
            <X size={20} />
          </button>
        </div>
        <div className='mt-4 pt-0 p-5'>
          <div className='flex items-center'>
            {isVeg == 1 ? (
              <PiSquareLogoFill size={20} color='green' />
            ) : (
              <PiSquareLogoFill size={20} color='red' />
            )}
          </div>
          <h2 className='text-xl font-semibold'>{name}</h2>
          <p className='font-semibold mb-2'>₹{price}</p>
          <p className='text-gray-600 mb-4 text-[14px] line-clamp-4'>
            {description}
          </p>
        </div>

        <div className='flex justify-center mt-6 absolute top-[19rem] right-40'>
          <AddToCartButton
            info={dish?.card?.card?.info}
            length={dish?.card?.card?.info?.addons?.length}
          />
        </div>
      </div>
    </div>
  );
};

export default ResDetailModal;
