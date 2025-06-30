import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { styles } from "../utils/styles";
import Line from "../components/Line";
import Card from "../components/Card";
import { ShimmerHeading } from "../components/Shimmer/Heading";
import { ShimmerCard } from "../components/Shimmer/Card";

const TopRestaurantChains = () => {
  const [scroll, setScroll] = useState(0);
  const { data, topRestaurantChains } = useFetch();

  const title0 = data?.cards?.[0]?.card?.card?.header?.title;
  const title1 = data?.cards?.[1]?.card?.card?.header?.title;

  let heading = null;
  if (title0 && title0.includes("Top restaurant chains")) {
    heading = title0;
  } else if (title1) {
    heading = title1;
  }

  const { flexBetween } = styles;
  const handleLeftClick = () => {
    scroll <= 0 ? "" : setScroll((prev) => prev - 620);
  };
  const handleRightClick = () => {
    scroll >= 4900 ? "" : setScroll((prev) => prev + 620);
  };

  return (
    <>
      <div className={`${flexBetween}`}>
        <h1 className='py-[18px] pl-4 font-bold text-2xl'>
          {heading ? heading : <ShimmerHeading />}
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
              scroll >= 4900 && "opacity-50"
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
        {topRestaurantChains && topRestaurantChains.length > 0 ? (
          topRestaurantChains?.map((topRestaurantChain) => (
            <div
              key={topRestaurantChain?.info?.id}
              className='cursor-pointer w-[283.3px] relative flex-shrink-0 hover:scale-95 transition-transform duration-300 ease-in-out'
            >
              <Card {...topRestaurantChain} />
            </div>
          ))
        ) : (
          <div className='flex gap-8'>
            {[1, 2, 3, 4].map((c, idx) => (
              <ShimmerCard key={idx} />
            ))}
          </div>
        )}
      </div>

      <Line />
    </>
  );
};

export default TopRestaurantChains;
