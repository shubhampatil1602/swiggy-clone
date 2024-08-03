import useFetch from '../hooks/useFetch';
import { Card } from './TopRestaurantChains';

const ResWithOnlineFood = () => {
  const { data, resWithOnlineFoods } = useFetch();
  return (
    <>
      <div className={`flex`}>
        <h1 className={`py-[18px] pl-4 font-bold text-2xl`}>
          {data?.cards[2]?.card?.card?.title}
        </h1>
      </div>

      <div
        style={{
          translate: `-${scroll}px`,
        }}
        className='flex flex-wrap gap-6 duration-500 px-4 pb-4'
      >
        {resWithOnlineFoods?.map((resWithOnlineFood) => (
          <div
            key={resWithOnlineFood?.info?.id}
            className='cursor-pointer w-[244px] relative flex-shrink-0 flex-1 sm:flex-grow-0 hover:scale-95 transition-transform duration-300 ease-in-out'
          >
            <Card {...resWithOnlineFood} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ResWithOnlineFood;
