import { CLOUDINARY_CDN_URL } from "../utils/constants";

const TopPicks = ({ creativeId, dish }) => {
  return (
    <div className='flex-shrink-0 flex gap-2 pb-8'>
      <div className='h-[302px] w-[294px] rounded-2xl relative '>
        <img src={CLOUDINARY_CDN_URL + creativeId} alt='top picks' />
        <div className='w-full absolute bottom-6 flex justify-between items-center px-4'>
          <p className='text-white'>
            ₹{dish?.price / 100 || dish?.defaultPrice / 100}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
