import { IoStar } from 'react-icons/io5';
import { GoArrowRight } from 'react-icons/go';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { CLOUDINARY_CDN_URL, NO_IMG_AVAILABLE } from '../utils/constants';
import AddToCartButton from './AddToCartButton';
import { useContext, useState } from 'react';
import ResDetailModal from './ResDetailModal';
import { PiSquareLogoFill } from 'react-icons/pi';
import { CoOrdinate } from '../contexts/locationContext';

const DishesSearch = ({ dish }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const {
    coOrdinate: { lat, lng },
  } = useContext(CoOrdinate);
  const MORE_DISHES_FROM_SAME_RES = `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=Burger&trackingId=undefined&submitAction=SUGGESTION&selectedPLTab=dish-add&restaurantMenuUrl=%2Fcity%2Fbangalore%2Fleons-burgers-and-wings-leon-grill-frazer-town-rest464509%3Fquery%3DBurger&restaurantIdOfAddedItem=464509&itemAdded=81870587&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22athbxylw1pvnebsbosky%22%2C%22dishFamilyId%22%3A%22846649%22%2C%22dishFamilyIds%22%3A%5B%22846649%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`;
  return (
    <div className='bg-white w-[410px] rounded-3xl px-3 pt-6 pb-8'>
      <div className='text-[#686b78] mx-2 border-[#bebfc5] border-b border-dotted mb-4 pb-4 flex items-center justify-between'>
        <div>
          <h2 className='text-[13px] font-semibold'>
            By {dish?.card?.card?.restaurant?.info?.name}
          </h2>
          <p className='flex items-center gap-1 text-[12.02px] font-light'>
            <IoStar />
            {dish?.card?.card?.restaurant?.info?.avgRating} ·{' '}
            {dish?.card?.card?.restaurant?.info?.sla?.slaString}
          </p>
        </div>
        <GoArrowRight size={25} />
      </div>
      <div className=' flex justify-between'>
        <div className='max-w-[56%] pl-2'>
          <div className='flex items-center'>
            {dish?.card?.card?.info?.isVeg == 1 ? (
              <PiSquareLogoFill size={20} color='green' />
            ) : (
              <PiSquareLogoFill size={20} color='red' />
            )}
          </div>
          <h3 className='mt-2 mb-1 text-[16px] leading-tight font-semibold'>
            {dish?.card?.card?.info?.name}
          </h3>
          <p className='text-sm font-semibold mb-3'>
            ₹
            {dish?.card?.card?.info?.defaultPrice / 100 ||
              dish?.card?.card?.info?.price / 100}
          </p>
          {dish?.card?.card?.info?.description && (
            <button
              className='w-[108.16px] h-[27.8px] border border-[#dededf] rounded-full text-[#676A6D] flex justify-center items-center'
              onClick={() => setShowDetailsModal(!showDetailsModal)}
            >
              <span className='text-xs font-medium'>More Details</span>
              <MdOutlineKeyboardArrowRight size={18} />
            </button>
          )}

          {/* more details Modal */}
          {showDetailsModal && (
            <ResDetailModal
              image={
                dish?.card?.card?.info?.imageId
                  ? CLOUDINARY_CDN_URL + dish?.card?.card?.info?.imageId
                  : NO_IMG_AVAILABLE
              }
              description={dish?.card?.card?.info?.description}
              name={dish?.card?.card?.info?.name}
              price={
                dish?.card?.card?.info?.defaultPrice / 100 ||
                dish?.card?.card?.info?.price / 100
              }
              isVeg={dish?.card?.card?.info?.isVeg}
              setShowDetailsModal={setShowDetailsModal}
              showDetailsModal={showDetailsModal}
              dish={dish}
            />
          )}
        </div>
        <div className='relative'>
          <img
            src={
              dish?.card?.card?.info?.imageId
                ? CLOUDINARY_CDN_URL + dish?.card?.card?.info?.imageId
                : NO_IMG_AVAILABLE
            }
            alt='dish'
            className='h-[130px] w-[154px] object-cover shadow rounded-2xl'
          />
          {/* <div onClick={() => {}}> */}
          <AddToCartButton
            info={dish?.card?.card?.info}
            length={dish?.card?.card?.info?.addons?.length}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default DishesSearch;
