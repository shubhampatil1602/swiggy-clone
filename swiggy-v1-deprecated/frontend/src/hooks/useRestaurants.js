import { useEffect, useState } from 'react';
import { MAIN_API_URL } from '../utils/constants';

const useRestaurants = () => {
  // WhatIsOnYourMind State
  const [menuCard, setMenuCard] = useState([]);

  // TopRestaurant State
  const [topRes, setTopRes] = useState([]);

  // RestaurantMenu State
  const [listOfResto, setListOfResto] = useState([]);
  const [listOfRestoCopy, setListOfRestoCopy] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [noResult, setNoResult] = useState(false);

  const filterResto = () => {
    const search = listOfResto?.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    search.length == 0 ? setNoResult(true) : setNoResult(false);
    setListOfRestoCopy(search);
  };

  const topRated = () => {
    const filteredResto = listOfResto?.filter(
      (l) => l?.info?.avgRating > 4.2 || l?.info?.avgRatingString > 4.2
    );
    setListOfRestoCopy(filteredResto);
  };

  const fetchRestaurants = async () => {
    try {
      const res = await fetch(MAIN_API_URL);
      const r = await res.json();

      // WhatIsOnYourMind
      setMenuCard(
        r?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );

      // TopRestaurant
      setTopRes(
        r?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      // RestaurantMenu
      setListOfResto(
        r?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setListOfRestoCopy(
        r?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return {
    listOfResto,
    listOfRestoCopy,
    filterResto,
    topRated,
    fetchRestaurants,
    searchText,
    setSearchText,
    noResult,
    topRes,
    menuCard,
  };
};

export default useRestaurants;
