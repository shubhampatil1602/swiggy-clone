import { useEffect, useState } from 'react';
import { SWIGGY_RES_MENU_URL } from '../utils/constants';

const useResMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  const [offers, setOffers] = useState([]);
  const [ItemCategory, setItemCategory] = useState([]);
  const [topPicks, setTopPicks] = useState([]);

  const fetchResMenu = async () => {
    const res = await fetch(SWIGGY_RES_MENU_URL + resId);
    const data = await res.json();

    setResMenu(data);

    setOffers(
      data?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );

    setTopPicks(
      data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (topPick) =>
          topPick?.card?.card['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel'
      )
    );

    setItemCategory(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (itemCat) =>
          itemCat?.card?.card?.itemCards || itemCat?.card?.card?.categories
      )
    );
  };

  useEffect(() => {
    fetchResMenu();
  }, []);

  return {
    resMenu,
    offers,
    topPicks,
    ItemCategory,
  };
};

export default useResMenu;
