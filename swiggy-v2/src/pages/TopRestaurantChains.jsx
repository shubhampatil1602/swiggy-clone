import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { styles } from '../utils/styles';
import Line from '../components/Line';
import Card from '../components/Card';

const TopRestaurantChains = () => {
  const [scroll, setScroll] = useState(0);
  const { data, topRestaurantChains } = useFetch();

  const { flexBetween } = styles;
  const handleLeftClick = () => {
    scroll <= 0 ? '' : setScroll((prev) => prev - 620);
  };
  const handleRightClick = () => {
    scroll >= 4900 ? '' : setScroll((prev) => prev + 620);
    // setScroll((prev) => prev + 620);
  };

  return (
    <>
      <div className={`${flexBetween}`}>
        <h1 className={`py-[18px] pl-4 font-bold text-2xl`}>
          {data?.cards[0]?.card?.card?.header?.title.includes(
            'Top restaurant chains'
          )
            ? data?.cards[0]?.card?.card?.header?.title
            : data?.cards[1]?.card?.card?.header?.title}
        </h1>

        <div className='flex gap-2.5'>
          <button
            onClick={handleLeftClick}
            className={`rounded-full bg-slate-200 p-2.5 ${
              scroll <= 0 && 'opacity-50'
            }`}
          >
            <FaArrowLeft size={15} />
          </button>
          <button
            onClick={handleRightClick}
            className={`rounded-full bg-slate-200 p-2.5 ${
              scroll >= 4900 && 'opacity-50'
            }`}
          >
            <FaArrowRight size={15} />
          </button>
        </div>
      </div>

      <div
        style={{
          translate: `-${scroll}px`,
        }}
        className='flex gap-4 duration-500 px-4 pb-4'
      >
        {topRestaurantChains?.map((topRestaurantChain) => (
          <div
            key={topRestaurantChain?.info?.id}
            className='cursor-pointer w-[283.3px] relative flex-shrink-0 hover:scale-95 transition-transform duration-300 ease-in-out'
          >
            <Card {...topRestaurantChain} />
          </div>
        ))}
      </div>

      <Line />
    </>
  );
};

export default TopRestaurantChains;
