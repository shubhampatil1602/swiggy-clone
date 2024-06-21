export const DisplayCoupon = ({ coupon }) => {
  return (
    <div className='border rounded-lg flex flex-col py-2 px-4'>
      <h2>{coupon?.info?.header}</h2>
      <p>{coupon?.info?.couponCode}</p>
    </div>
  );
};
