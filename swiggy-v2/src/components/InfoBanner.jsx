import { FaCaretDown } from 'react-icons/fa6';
import { MdStars } from 'react-icons/md';

const InfoBanner = ({ info }) => {
  return (
    <div className='w-full h-[206.19px] my-2 rounded-[30px] px-4 pb-[18px] bg-gradient-to-t from-gray-300/80'>
      <div className='w-full border border-gray-200 rounded-[20px] h-full bg-white'>
        <div className='flex px-4 pt-4 gap-1 items-center text-base font-semibold'>
          <MdStars color='green' size={20} />
          <span>
            {info?.avgRating || info?.avgRatingString} (
            {info?.totalRatingsString})
          </span>
          <span>
            <span className='mx-1.5 text-gray-500'>·</span>
            {info?.costForTwoMessage}
          </span>
        </div>

        <p className='pl-5 py-1 text-[#ff5200] text-sm font-semibold underline'>
          {info?.cuisines?.join(', ')}
        </p>

        <div className='flex items-center gap-4 h-[50px] my-3 pl-5'>
          <div className='flex flex-col items-center'>
            <div className='bg-[#c4c4c4] h-2 w-2 rounded-full'></div>
            <div className='bg-[#c4c4c4] h-[21px] w-[1px]'></div>
            <div className='bg-[#c4c4c4] h-2 w-2 rounded-full'></div>
          </div>

          <div className='text-sm flex flex-col h-full justify-between'>
            <div className='flex gap-1.5'>
              <p className='font-semibold'>Oulet</p>
              <p className='text-[#02060c99] font-light'>{info?.areaName}</p>
              <p className='flex flex-col-reverse mb-0.5'>
                <FaCaretDown color='#ff5200' />
              </p>
            </div>

            <p className='font-semibold'>
              {info?.sla?.slaString?.toLowerCase()}
            </p>
          </div>
        </div>

        <div className='border-t flex px-4 py-2.5 text-[#02060c99] text-sm'>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${info?.feeDetails?.icon}`}
            alt='delivery icon'
            className='w-5 h-5 mr-2'
          />
          <p>{info?.feeDetails?.message?.replace(/<[^>]*>/g, '')}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
