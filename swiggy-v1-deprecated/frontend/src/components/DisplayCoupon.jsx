import { CLOUDINARY_OFFER_URL } from '../utils/constants';

export const DisplayCoupon = ({ coupon }) => {
  return (
    <div className='flex-shrink-0 border flex gap-3 p-3 w-80 rounded-2xl'>
      <img
        src={CLOUDINARY_OFFER_URL + coupon?.info?.offerLogo}
        alt='offer'
        className='w-12 h-w-12'
      />

      <div>
        <h2 className='font-bold text-lg text-[#02060CEB]'>
          {coupon?.info?.header?.slice(0, 20)}
        </h2>
        <p className='text-[#02060C73] text-sm font-bold'>
          {coupon?.info?.couponCode}
        </p>
      </div>
    </div>
  );
};
