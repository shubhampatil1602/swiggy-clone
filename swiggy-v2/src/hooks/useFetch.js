import { useContext, useEffect, useState } from 'react';
import { CoOrdinate } from '../contexts/locationContext';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [whatIsOnYourMind, setWhatIsOnYourMind] = useState([]);
  const [topRestaurantChains, setTopRestaurantChains] = useState([]);
  const [resWithOnlineFoods, setResWithOnlineFoods] = useState([]);
  const {
    coOrdinate: { lat, lng },
  } = useContext(CoOrdinate);

  const MAIN_SWIGGY_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

  const fetchData = async () => {
    const res = await fetch(MAIN_SWIGGY_URL);
    const data = await res.json();

    setData(data?.data);

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
  }, [lat, lng]);

  return {
    data,
    whatIsOnYourMind,
    topRestaurantChains,
    resWithOnlineFoods,
  };
};

export default useFetch;
