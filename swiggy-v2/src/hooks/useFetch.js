import { useEffect, useState } from 'react';
import { MAIN_SWIGGY_URL } from '../utils/constants';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [whatIsOnYourMind, setWhatIsOnYourMind] = useState([]);
  const [topRestaurantChains, setTopRestaurantChains] = useState([]);
  const [resWithOnlineFoods, setResWithOnlineFoods] = useState([]);

  const fetchData = async () => {
    const res = await fetch(MAIN_SWIGGY_URL);
    const data = await res.json();

    setData(data?.data);
    // console.log(data.data);
    setWhatIsOnYourMind(
      data?.data?.cards[0].card?.card?.gridElements?.infoWithStyle?.info
    );
    setTopRestaurantChains(
      data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        data?.data?.cards[0].card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setResWithOnlineFoods(
      data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    whatIsOnYourMind,
    topRestaurantChains,
    resWithOnlineFoods,
  };
};

export default useFetch;
