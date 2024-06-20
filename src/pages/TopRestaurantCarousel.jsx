import TopRestaurant from '../components/TopRestaurant';
import MenuCardShimmer from '../components/MenuCardShimmer';
import useRestaurants from '../hooks/useRestaurants';
import { Link } from 'react-router-dom';

const TopRestaurantCarousel = () => {
  const { topRes } = useRestaurants();

  return topRes.length === 0 ? (
    <MenuCardShimmer />
  ) : (
    <div className='w-3/4 mx-auto'>
      <div className='flex justify-between p-4'>
        <h1 className='font-bold text-2xl'>
          Top restaurant chains in Bangalore
        </h1>
        {/* Buttons */}
      </div>

      <div className='overflow-x-auto hide-scrollbar container-carousel'>
        <div
          className='flex gap-8 pl-4 transition-transform duration-500'
          style={{
            transform: `translateX(-${0.1}%)`,
          }}
        >
          {topRes?.map((r) => (
            <Link to={`/restaurants/${r?.info?.id}`} key={r?.info?.id}>
              <TopRestaurant r={r} sty={'2'} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRestaurantCarousel;
