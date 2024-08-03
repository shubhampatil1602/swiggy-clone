import useFetch from '../hooks/useFetch';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { styles } from '../utils/styles';
import { useState } from 'react';
import Line from '../components/Line';

const WhatIsOnTourMind = () => {
  const [scroll, setScroll] = useState(0);
  const { data, whatIsOnYourMind } = useFetch();
  const { flexBetween } = styles;

  const handleLeftClick = () => {
    scroll <= 0 ? '' : setScroll((prev) => prev - 530);
  };
  const handleRightClick = () => {
    scroll >= 2000 ? '' : setScroll((prev) => prev + 530);
  };

  return (
    <>
      <div className={`${flexBetween}`}>
        <h1 className={`pb-1 pl-4 pt-4 font-bold text-2xl`}>
          {data?.cards[0]?.card?.card?.header?.title}
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
              scroll >= 2000 && 'opacity-50'
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
        className=' flex gap-4 duration-500 px-4 pb-4'
      >
        {whatIsOnYourMind?.map((foodCard) => (
          <img
            key={foodCard?.id}
            src={
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/' +
              foodCard?.imageId
            }
            alt={foodCard?.description}
            className='h-[180px] w-[144px]'
          />
        ))}
      </div>

      <Line />
    </>
  );
};

export default WhatIsOnTourMind;
