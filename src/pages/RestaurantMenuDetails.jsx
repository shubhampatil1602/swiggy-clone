import { useEffect, useState } from 'react';
import {
  CLOUDINARY_CDN_URL,
  CORS_PROXY,
  RESTAURANTS_MENU_DETAILS_URL,
} from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenuDetails = () => {
  const [resInfo, setResInfo] = useState(null);
  const [acc, setAcc] = useState(false);
  const { resId } = useParams();

  const fetchData = async () => {
    try {
      const res = await fetch(
        CORS_PROXY +
          RESTAURANTS_MENU_DETAILS_URL +
          resId +
          '&catalog_qa=undefined&submitAction=ENTER'
      );
      const r = await res.json();
      setResInfo(r?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <div className='w-3/4 mx-auto relative z-0 top-28'>
      <h1>{resInfo?.cards?.[0]?.card?.card?.text}</h1>
      <h2>Deals for you</h2>
      <div className='flex'>
        {resInfo?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(
          (c) => (
            <DisplayCoupon key={c?.info?.offerIds} details={c} />
          )
        )}
      </div>
      <div className=''>
        {resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.filter((c) => c?.card?.card?.title != undefined)
          .map((c, index) => (
            <div key={index}>
              <h1
                onClick={() => setAcc(!acc)}
                className='bg-orange-400 text-xl font-bold p-4'
              >
                {c?.card?.card?.title}
              </h1>
              {/* {console.log(c?.card?.card?.title)} */}
              <div className=''>
                {resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                  ?.map((c) => c?.card?.card)
                  .filter((c) => c?.itemCards)
                  .map(
                    (c, index) =>
                      acc && <Info key={index} menu={c?.itemCards} />
                  )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenuDetails;

const RestaurantMenuDetailsShimmer = () => {
  return (
    <div className='p-4 mt-4 border-b border-slate-200 pb-6 w-screen max-w-screen-md cursor-pointer'>
      <div className='flex'>
        <div className='h-4 bg-gray-200 rounded-full w-48 mb-9'></div>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
        <div className='flex justify-center flex-col pl-2'></div>
        <div className='pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col'>
          <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
        </div>
      </div>
      <div className='text-xl font-semibold pt-2'>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
      </div>
      <div className='text-md font-thin'>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
      </div>
      <div className='text-slate-500 text-sm font-thin pt-4'>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
      </div>
    </div>
  );
};

function Info({ menu }) {
  return (
    <>
      {menu?.map((m) => (
        <Recommended key={m?.info?.id} details={m} />
      ))}
    </>
  );
}

function DisplayCoupon({ details }) {
  return (
    <div className='border rounded-lg flex flex-col py-2 px-4'>
      <h2>{details?.info?.header}</h2>
      <p>{details?.info?.couponCode}</p>
    </div>
  );
}

function Recommended({ details }) {
  return (
    <>
      <div className='border flex'>
        <div className='w-4/5'>
          <h4>{details?.card?.info?.isVeg == 1 ? 'Veg' : 'Non veg'}</h4>
          <h1 className='font-semibold text-lg'>{details?.card?.info?.name}</h1>
          <p className='font-semibold'>
            ₹
            {parseInt(details?.card?.info?.defaultPrice) / 100 ||
              parseInt(details?.card?.info?.price) / 100}
          </p>
          <p>
            {details?.card?.info?.ratings?.aggregatedRating?.rating}
            {details?.card?.info?.ratings?.aggregatedRating?.ratingCount}
          </p>
          <p className='text-sm text-gray-500'>
            {details?.card?.info?.description}
          </p>
        </div>
        <div className=''>
          <img
            src={CLOUDINARY_CDN_URL + details?.card?.info?.imageId || ''}
            alt='dish'
            className='h-[100px]'
          />
        </div>
      </div>
    </>
  );
}
