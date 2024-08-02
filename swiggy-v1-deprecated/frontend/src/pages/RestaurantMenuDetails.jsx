import { Link, useParams } from 'react-router-dom';
import useRestaurantMenuDetails from '../hooks/useRestaurantMenuDetails';
import RestaurantMenuDetailsShimmer from '../components/RestaurantMenuDetailsShimmer';
import { DisplayCoupon } from '../components/DisplayCoupon';
import { CLOUDINARY_CDN_URL } from '../utils/constants';
import { MdStars } from 'react-icons/md';
import ItemCategoryAccordian from '../components/ItemCategoryAccordian';
import { useState } from 'react';
import useMenuTypes from '../hooks/useMenuTypes';
import MenuCarousel from '../components/MenuCarousel';
import NestedItemCategory from '../components/NestedItemCategory';

const RestaurantMenuDetails = () => {
  const { resId } = useParams();
  const { resInfo } = useRestaurantMenuDetails(resId);
  const [show, setShow] = useState(0);

  const {
    offerInfoWithStyle,
    menuCarousel,
    itemCategory,
    restaurantDetail,
    nestedItemCategory,
  } = useMenuTypes(resInfo);

  const toggleShow = (index) => {
    if (show === index) {
      setShow(null);
    } else {
      setShow(index);
    }
  };

  if (!resInfo) {
    return (
      <div
        role='status'
        className='animate-pulse w-full flex flex-col justify-center items-center relative z-0 top-28'
      >
        <RestaurantMenuDetailsShimmer />
      </div>
    );
  }

  return (
    <div className='w-[800px] mx-auto relative z-0 top-28'>
      <div className='text-xs mb-8'>
        <Link to='/' className='text-gray-400 hover:text-black'>
          Home
        </Link>
        {' / '}
        <span>{restaurantDetail?.city}</span>
        {' / '}
        <span>
          {restaurantDetail?.name || resInfo?.cards?.[0]?.card?.card?.text}
        </span>
      </div>

      {/* Restaurant Name */}
      <h1 className='font-bold text-2xl px-3'>
        {restaurantDetail?.name || resInfo?.cards?.[0]?.card?.card?.text}
        {' · '}
        {restaurantDetail?.cuisines.join(', ')}
      </h1>

      {/* Restaurant image banner */}
      <div className='w-full p-6 inn-shadow mt-5'>
        <div
          className={`absolute w-[95%]`}
          style={{
            top: `${104}px`,
            left: 20,
          }}
        >
          <div className='bg-gradient-to-t from-black via-transparent to-transparent h-[220px] px-2 py-1 rounded-b-3xl flex justify-start items-end text-white'>
            <p className='flex justify-center items-center font-bold text-3xl pl-4 pb-3'>
              <MdStars color='green' size={30} className='mr-2' />
              {restaurantDetail?.avgRating ||
                restaurantDetail?.avgRatingString}{' '}
              ·{' '}
              {restaurantDetail?.totalRatingsString ||
                restaurantDetail?.totalRatings + ' + ratings'}{' '}
              · ( ₹
              {Number(restaurantDetail?.costForTwo) / 100 + ' for two' ||
                restaurantDetail?.costForTwoMessage}
              )
            </p>
          </div>
        </div>
        <img
          src={CLOUDINARY_CDN_URL + restaurantDetail?.cloudinaryImageId}
          alt='resImage'
          className='w-full h-56 object-cover rounded-3xl'
        />
      </div>

      {/* Deals for you */}
      <h2 className='font-bold text-xl px-3 py-2 mt-6'>{'Deals for you'}</h2>
      <div className='overflow-x-auto hide-scrollbar container-carousel p-3'>
        <div className='flex gap-3 transition-transform duration-500'>
          {offerInfoWithStyle?.offers?.map((c) => (
            <DisplayCoupon key={c?.info?.offerIds} coupon={c} />
          ))}
        </div>
      </div>

      {/* MENU */}
      <div className='flex justify-center p-6 my-6 border-y'>
        <h2 className='text-sm font-normal tracking-[0.3em] text-gray-500'>
          - MENU -
        </h2>
      </div>

      {/* Top Picks */}
      {menuCarousel?.length > 0 && (
        <>
          <h2 className='font-bold text-xl px-3 py-2 mt-6'>
            {menuCarousel?.[0]?.card?.card?.title}
          </h2>
          <div className='overflow-x-auto hide-scrollbar container-carousel pt-3'>
            <div className='flex gap-3 transition-transform duration-500 '>
              {menuCarousel?.map((c) => (
                <MenuCarousel
                  key={c?.card?.card?.['@type']}
                  c={c?.card?.card}
                />
              ))}
            </div>
          </div>
          <hr className='border-b-[14px] border-gray-100' />
        </>
      )}
      {/* Single Accordian */}
      <div>
        {itemCategory?.map((c, index) => (
          <ItemCategoryAccordian
            key={c?.card?.card?.title}
            c={c?.card?.card}
            show={index === show ? true : false}
            setShow={() => toggleShow(index)}
          />
        ))}
      </div>
      {/* nestedItemCategory Accordian */}
      {nestedItemCategory && (
        <div>
          {nestedItemCategory?.map((c, index) => (
            <NestedItemCategory key={c?.card?.card?.title} c={c} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuDetails;
