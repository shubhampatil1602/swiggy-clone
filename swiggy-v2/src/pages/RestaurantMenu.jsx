import { Link, useParams } from 'react-router-dom';
import useResMenu from '../hooks/useResMenu';
import { MdStars } from 'react-icons/md';
import { FaAngleDown, FaAngleUp, FaCaretDown } from 'react-icons/fa6';
import {
  CLOUDINARY_CDN_URL,
  NO_IMG_AVAILABLE,
  OFFER_IMG,
} from '../utils/constants';
import { IoIosSearch } from 'react-icons/io';
import { PiSquareLogoFill } from 'react-icons/pi';
import { IoStar } from 'react-icons/io5';
import { useState } from 'react';
import { Tags } from 'lucide-react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resMenu, offers, topPicks, ItemCategory } = useResMenu(
    resId?.split('-').at(-1)
  );
  console.log(topPicks);

  const info = resMenu?.data?.cards[2]?.card?.card?.info;

  return (
    <section className='w-[55%] mx-auto'>
      <div className='text-[10px] my-7 pl-1'>
        <Link to='/' className='text-gray-400 hover:text-black'>
          Home
        </Link>
        <span className='mx-1.5 text-gray-400'>/</span>
        <span className='text-gray-400 hover:text-black'>{info?.city}</span>
        <span className='mx-1.5 text-gray-400'>/</span>
        <span>{info?.name}</span>
      </div>

      {/* Restaurant Name */}
      <h1 className='font-bold text-2xl px-4 py-3'>{info?.name}</h1>

      {/* Info Banner */}
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

      {/* Deals for you */}
      <div className='px-3 my-2'>
        <h2 className='font-bold text-xl py-2 mt-6'>{'Deals for you'}</h2>
        <div className='overflow-x-auto hide-scrollbar container-carousel'>
          <div className='flex gap-3 transition-transform duration-500'>
            {offers?.map((offer) => (
              <DisplayCoupon key={offer?.info?.offerIds[0]} {...offer?.info} />
            ))}
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className='p-6 mt-5'>
        <h2 className='text-sm text-center w-[97%] font-normal tracking-[0.3em] text-gray-500'>
          - MENU -
        </h2>
      </div>
      <Link
        to={'/'}
        className='flex items-center p-4 mb-8 bg-[#02060c0d] rounded-2xl'
      >
        <span className='w-[97%] text-center text-sm font-semibold text-gray-500'>
          Search for dishes
        </span>
        <span className=''>
          <IoIosSearch size={20} />
        </span>
      </Link>

      {/* Top Picks */}
      {topPicks?.length != 0 && (
        <div className='px-3'>
          <h2 className='font-bold text-xl py-2 mt-4 mb-2'>
            {topPicks[0]?.card?.card?.title}
          </h2>
          <div className='overflow-x-auto hide-scrollbar container-carousel'>
            <div className='flex gap-3 transition-transform duration-500'>
              {topPicks[0]?.card?.card?.carousel?.map((topPick) => (
                <TopPicks
                  key={topPick?.dish?.info?.id}
                  creativeId={topPick?.creativeId}
                  dish={topPick?.dish?.info}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Accordians */}
      <div>
        {ItemCategory?.map(({ card: { card } }) => (
          <ItemCatAcc key={card?.title} card={card} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantMenu;

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

const ItemCatAcc = ({ card }) => {
  const [openSingleAcc, setOpenSingleAcc] = useState(
    card['@type'] ? true : false
  );

  const handleOpenSingleAcc = () => {
    setOpenSingleAcc((openSingleAcc) => !openSingleAcc);
  };
  if (card?.itemCards) {
    return (
      <>
        <div
          onClick={handleOpenSingleAcc}
          className={`flex items-center justify-between cursor-pointer p-4 ${
            card['@type'] ? 'border-t-[14px]' : 'border-b-2'
          } border-[#F2F2F3]`}
        >
          <h2
            className={`${
              card['@type'] ? 'text-lg font-bold' : 'text-base font-semibold'
            } text-gray-900`}
          >
            {card?.title} ({card?.itemCards?.length})
          </h2>
          {openSingleAcc ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        {card?.itemCards?.map(
          ({ card: { info } }) =>
            openSingleAcc && <ItemCatAccData key={info?.id} {...info} />
        )}
      </>
    );
  } else {
    return (
      <>
        <div className='flex items-center justify-between cursor-pointer p-4 border-t-[14px] border-[#F2F2F3]'>
          <h2 className='text-lg font-bold text-gray-900'>{card?.title}</h2>
        </div>

        {card?.categories?.map((category) => (
          <ItemCatAcc key={category?.title} card={category} />
        ))}
      </>
    );
  }
};

const ItemCatAccData = (info) => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore((showMore) => !showMore);
  };
  return (
    <>
      <div className={`flex justify-between border-b mt-8 mb-3 px-4 pb-12`}>
        <div className='w-3/4'>
          <h4 className='flex gap-1'>
            <span>
              {info?.isVeg == 1 ? (
                <PiSquareLogoFill size={20} color='green' />
              ) : (
                <PiSquareLogoFill size={20} color='red' />
              )}
            </span>
            <span className='text-orange-600 text-sm font-medium'>
              {info?.isBestseller && '🌟 Bestseller'}
            </span>
          </h4>
          <h1 className='font-bold text-lg'>{info?.name}</h1>
          <div className='flex items-center py-2 gap-2'>
            <p className='font-normal text-base '>
              ₹
              {parseInt(info?.defaultPrice) / 100 ||
                parseInt(info?.price) / 100}
            </p>
            {info?.offerTags && (
              <span className='flex items-center gap-1'>
                <Tags color='green' size={20} />
                <span className='text-[#02060c99] font-bold text-xs tracking-tighter'>
                  {info?.offerTags[0]?.title} {info?.offerTags[0]?.subTitle}
                </span>
              </span>
            )}
          </div>
          {info?.ratings?.aggregatedRating?.rating > 0 && (
            <p className='flex items-center gap-1 text-sm text-gray-500'>
              <span className='text-green-700 flex items-center gap-1'>
                <span>
                  <IoStar color='green' />
                </span>
                <span>{info?.ratings?.aggregatedRating?.rating || null}</span>
              </span>
              ({info?.ratings?.aggregatedRating?.ratingCount || null})
            </p>
          )}
          <div>
            <p
              className={`text-sm font-light text-gray-600 pt-2 ${
                showMore ? '' : 'line-clamp-2'
              }`}
            >
              {info?.description}
            </p>
            {info?.description?.length > 190 && (
              <button
                onClick={handleShowMore}
                className='font-semibold text-sm text-gray-600'
              >
                {showMore ? 'less' : 'more'}
              </button>
            )}
          </div>
        </div>

        <div className='w-1/5 relative'>
          <img
            src={
              info?.imageId
                ? CLOUDINARY_CDN_URL + info?.imageId
                : NO_IMG_AVAILABLE
            }
            alt='dish'
            className='h-[130px] object-cover w-full shadow rounded-2xl border'
          />
          <div className='flex flex-col justify-center items-center absolute top-[6.6rem] left-[1.1rem]'>
            <button className='bg-white hover:bg-gray-200 text-green-600 font-bold text-lg border mx-auto py-1 px-10 rounded-lg shadow-md'>
              ADD
            </button>
            <p className='text-xs font-light text-gray-500'>
              {info?.addons?.length > 0 && 'Customisable'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

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
