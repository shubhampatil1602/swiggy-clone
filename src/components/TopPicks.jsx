import { CLOUDINARY_CDN_URL } from '../utils/constants';

const TopPicks = ({ creativeId, dish }) => {
  return (
    <div className='flex-shrink-0 flex gap-2 pb-8'>
      <div className='h-[302px] w-[294px] rounded-2xl relative '>
        <img src={CLOUDINARY_CDN_URL + creativeId} alt='top picks' />
        <div className='w-full absolute bottom-6 flex justify-between items-center px-4'>
          <p className='text-white'>
            ₹{dish?.price / 100 || dish?.defaultPrice / 100}
          </p>
          <button className='bg-white hover:bg-gray-200 text-green-600 font-bold text-lg border py-1 px-10 rounded-lg shadow-md'>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
