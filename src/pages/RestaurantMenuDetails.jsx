import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenuDetails from '../hooks/useRestaurantMenuDetails';
import RestaurantMenuDetailsShimmer from '../components/RestaurantMenuDetailsShimmer';
import { DisplayCoupon } from '../components/DisplayCoupon';
import { AccordianCardDishesArray } from '../components/AccordianCardDishesArray';

const RestaurantMenuDetails = () => {
  const [acc, setAcc] = useState(false);
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenuDetails(resId);

  if (!resInfo) {
    return (
      <div
        role='status'
        className='animate-pulse w-full flex flex-col justify-center items-center relative z-0 top-28'
      >
        <RestaurantMenuDetailsShimmer />
        <RestaurantMenuDetailsShimmer />
        <RestaurantMenuDetailsShimmer />
        <RestaurantMenuDetailsShimmer />
        <RestaurantMenuDetailsShimmer />
      </div>
    );
  }

  // ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel?.dish?.info?.id
  return (
    <div className='w-3/4 mx-auto relative z-0 top-28'>
      {/* Restaurant Name */}
      <h1>{resInfo?.cards?.[0]?.card?.card?.text}</h1>
      <h2>Deals for you</h2>
      <div className='flex'>
        {/* Coupons */}
        {resInfo?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(
          (c) => (
            <DisplayCoupon key={c?.info?.offerIds} coupon={c} />
          )
        )}
      </div>
      <div className=''>
        {/* Accordian card title */}
        {resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.filter((c) => c?.card?.card?.title != undefined)
          .map((c) => (
            <div key={c?.card?.card?.title}>
              <h1
                onClick={() => setAcc(!acc)}
                className='bg-orange-400 text-xl font-bold p-4'
              >
                {c?.card?.card?.title}
              </h1>

              {/* Accordian card dishes */}
              <div className=''>
                {resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                  ?.map((c) => c?.card?.card)
                  .filter((c) => c?.itemCards)
                  .map(
                    (c, index) =>
                      acc && (
                        <AccordianCardDishesArray
                          key={index}
                          menu={c?.itemCards}
                        />
                      )
                  )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenuDetails;

// DisplayCoupon, AccordianCardDishesArray, AccordianCardDishes
