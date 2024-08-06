import { OFFER_IMG } from '../utils/constants';

const DisplayCoupon = (info) => {
  return (
    <div className='flex-shrink-0 border flex gap-3 p-3 w-80 rounded-2xl'>
      <img
        src={`${OFFER_IMG}${info?.logoBottom || info?.offerLogo}`}
        alt='offer'
        className='w-12 h-w-12'
      />

      <div>
        <h2 className='font-bold text-lg text-[#02060CEB] line-clamp-1'>
          {info?.header}
        </h2>
        <p className='text-[#02060C73] text-sm font-bold'>{info?.couponCode}</p>
      </div>
    </div>
  );
};

export default DisplayCoupon;
