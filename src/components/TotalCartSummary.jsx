import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const TotalCartSummary = ({ c }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  const calculateGrandTotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total +=
        ((item.card.info.price || item.card.info.defaultPrice) *
          item.quantity) /
        100;
    });
    return total;
  };

  return (
    <div className='w-[500px] fixed z-30 bg-white bottom-0 overflow-y-scroll'>
      {/* Total Cart Summary - TODO Hide unhide */}
      <div
        onClick={toggleShow}
        className='border-b bg-orange-200 px-4 py-6 flex justify-between cursor-pointer'
      >
        <h2 className='font-bold text-2xl'>
          {' '}
          Your Bill - ₹{' '}
          <span className='line-through font-medium mr-3'>
            {calculateGrandTotal(c).toFixed(2)}
          </span>
          {(calculateGrandTotal(c) - calculateGrandTotal(c) * 0.1).toFixed(2)}
        </h2>
        <span className='flex justify-center items-center mr-4'>
          {show ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </div>
      {show && (
        <div className='flex flex-col gap-2 py-4 h-[300px] overflow-y-scroll'>
          <div className='flex justify-between text-lg px-4 font-bold'>
            <span>Item Name</span>
            <span>Item Price</span>
          </div>
          <div className='flex flex-col justify-between px-4'>
            {c?.map((item, index) => (
              <div key={index} className='flex justify-between text-base'>
                <h3>
                  {/* {item?.quantity} X {item?.card?.info?.name?.slice(0, 40)} */}
                  {item?.quantity} X{' '}
                  {item?.card?.info?.name?.length > 33
                    ? item?.card?.info?.name?.slice(0, 35) + '..'
                    : item?.card?.info?.name}
                </h3>
                <p>
                  ₹
                  {parseFloat(
                    (item?.card?.info?.defaultPrice / 100).toFixed(2) *
                      item?.quantity
                  ) ||
                    parseFloat((item?.card?.info?.price / 100).toFixed(2)) *
                      item?.quantity}{' '}
                </p>
              </div>
            ))}
          </div>
          <div className='flex justify-between border-t pt-2 mt-2 px-4 font-semibold'>
            <span>Grand Total</span>
            <span>₹{calculateGrandTotal(c).toFixed(2)}</span>
          </div>
          <div className='flex justify-between px-4 font-semibold'>
            <span>Discount (FLAT 10% OFF)</span>
            <span>- ₹ {(calculateGrandTotal(c) * 0.1).toFixed(2)}</span>
          </div>
          <div className='flex justify-between px-4 font-semibold mb-20'>
            <span>Delivery Charge</span>{' '}
            <span className='text-white bg-green-600 px-2 rounded-md'>
              FREE
            </span>
          </div>
          <div className='bg-green-100 fixed bottom-0 w-[500px] px-4 flex justify-between font-extrabold text-2xl border-t  pt-4 pb-6'>
            <span>TO PAY</span>
            <span>
              ₹
              {(calculateGrandTotal(c) - calculateGrandTotal(c) * 0.1).toFixed(
                2
              )}{' '}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TotalCartSummary;
