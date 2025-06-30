import useFetch from "../hooks/useFetch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { styles } from "../utils/styles";
import { useState } from "react";
import Line from "../components/Line";
import { WHAT_IS_ON_YOUR_MIND } from "../utils/constants";

const WhatIsOnTourMind = () => {
  const [scroll, setScroll] = useState(0);
  const { data, whatIsOnYourMind } = useFetch();
  const { flexBetween } = styles;

  const handleLeftClick = () => {
    scroll <= 0 ? "" : setScroll((prev) => prev - 530);
  };
  const handleRightClick = () => {
    scroll >= 2000 ? "" : setScroll((prev) => prev + 530);
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
              scroll <= 0 && "opacity-50"
            }`}
          >
            <FaArrowLeft size={15} />
          </button>
          <button
            onClick={handleRightClick}
            className={`rounded-full bg-slate-200 p-2.5 ${
              scroll >= 2000 && "opacity-50"
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
        {whatIsOnYourMind && whatIsOnYourMind.length > 0 ? (
          whatIsOnYourMind?.map((foodCard) => (
            <img
              key={foodCard?.id}
              src={WHAT_IS_ON_YOUR_MIND + foodCard?.imageId}
              alt={foodCard?.description}
              className='h-[180px] w-[144px]'
            />
          ))
        ) : (
          <div className='flex gap-8'>
            {[1, 2, 3, 4, 5, 6].map((c, idx) => (
              <div
                key={idx}
                className='h-[180px] w-[144px] bg-neutral-300 animate-pulse rounded-xl'
              ></div>
            ))}
          </div>
        )}
      </div>

      <Line />
    </>
  );
};

export default WhatIsOnTourMind;
