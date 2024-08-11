import { useEffect, useState } from 'react';
import Card from '../components/Card';
import useFetch, { filterOptions } from '../hooks/useFetch';
import { styles } from '../utils/styles';
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../redux/filterSlice';

const ResWithOnlineFood = () => {
  const [activeFilterBtn, setActiveFilterBtn] = useState(null);

  const dispatch = useDispatch();
  const { data, resWithOnlineFoods } = useFetch();
  const filterValue = useSelector((state) => state.filterSlice.filterValue);

  function filterResWithOnlineFoods() {
    return resWithOnlineFoods?.filter((resWithOnlineFood) => {
      if (filterValue == null) return resWithOnlineFood;

      switch (filterValue) {
        case 'Offers':
          return (
            resWithOnlineFood?.info?.aggregatedDiscountInfoV3?.header ||
            resWithOnlineFood?.info?.aggregatedDiscountInfoV3?.subHeader ||
            resWithOnlineFood?.info?.aggregatedDiscountInfoV3?.discountTag
          );

        case 'Rs. 300-Rs. 600':
          return (
            resWithOnlineFood?.info?.costForTwo.slice(1).split(' ')[0] > 300 &&
            resWithOnlineFood?.info?.costForTwo.slice(1).split(' ')[0] < 600
          );

        case 'Less than Rs. 300':
          return (
            resWithOnlineFood?.info?.costForTwo.slice(1).split(' ')[0] < 300
          );

        case 'Ratings 4.0+':
          return (
            resWithOnlineFood?.info?.rating > 4.0 ||
            resWithOnlineFood?.info?.avgRatingString > 4.0
          );
        default:
          return resWithOnlineFood;
      }
    });
  }
  const handleFilter = (title) => {
    setActiveFilterBtn(activeFilterBtn === title ? null : title);
  };
  useEffect(() => {
    dispatch(setFilterValue(activeFilterBtn));
  }, [activeFilterBtn, dispatch]);

  return (
    <>
      <div className={`flex`}>
        <h1 className={`py-[18px] pl-4 font-bold text-2xl`}>
          {data?.cards[2]?.card?.card?.title}
        </h1>
      </div>
      <div className='flex gap-3 pl-4 mt-2 mb-6 w-full'>
        {filterOptions.map((btn) => (
          <button
            key={btn.title}
            className={`${styles.filterBtn} ${
              activeFilterBtn === btn.title
                ? 'border-black bg-[#f0f0f5]'
                : 'bg-white'
            }`}
            onClick={() => handleFilter(btn.title)}
          >
            <span>{btn.title}</span>
            {activeFilterBtn === btn.title && <X className='h-4 w-4' />}
          </button>
        ))}
      </div>

      <div
        style={{
          translate: `-${scroll}px`,
        }}
        className='flex flex-wrap gap-6 duration-500 px-4 pb-4'
      >
        {filterValue
          ? filterResWithOnlineFoods()?.map((resWithOnlineFood) => (
              <div
                key={resWithOnlineFood?.info?.id}
                className='cursor-pointer w-[244px] relative flex-shrink-0 flex-1 sm:flex-grow-0 hover:scale-95 transition-transform duration-300 ease-in-out'
              >
                <Card {...resWithOnlineFood} />
              </div>
            ))
          : resWithOnlineFoods?.map((resWithOnlineFood) => (
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
