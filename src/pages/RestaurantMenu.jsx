import { GoSearch } from 'react-icons/go';

import useRestaurants from '../hooks/useRestaurants';
import RestaurantMenuCard from '../components/RestaurantMenuCard';
import { Link } from 'react-router-dom';
import MenuCardShimmer2 from '../components/MenuCardShimmer2';

const RestaurantMenu = () => {
  const {
    filterResto,
    listOfResto,
    listOfRestoCopy,
    topRated,
    searchText,
    setSearchText,
    noResult,
  } = useRestaurants();

  return listOfResto?.length === 0 ? (
    <MenuCardShimmer2 />
  ) : (
    <div className='w-3/4 mx-auto'>
      <div className='flex justify-between p-4'>
        <h1 className='font-bold text-2xl'>
          Restaurants with online food delivery in Bangalore
        </h1>
      </div>
      <div className='w-full flex items-center gap-4 flex-col mb-10 mt-3'>
        <div className=''>
          <button onClick={topRated} className='border py-2 px-4 rounded bg-'>
            TOP RATED RESTO
          </button>
        </div>
        <div className='w-full flex justify-center items-center'>
          <input
            type='text'
            placeholder='Search for restaurants and foods'
            className=' w-3/4 px-3 py-2 outline-none border-l border-y rounded-s'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={filterResto}
            className='px-5 py-[7.3px] border-r border-y rounded-e'
          >
            <GoSearch size={25} />
          </button>
        </div>
      </div>
      <div className='flex gap-8 justify-center flex-wrap'>
        {listOfRestoCopy?.map((r) => (
          <Link to={`/restaurants/${r?.info?.id}`} key={r?.info?.id}>
            <RestaurantMenuCard r={r} sty={'-17'} />
          </Link>
        ))}
      </div>
      {noResult && (
        <div className='flex justify-center items-center'>
          <span className='px-4 py-2 text-lg font-semibold'>{`No match found for "${searchText}"`}</span>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
