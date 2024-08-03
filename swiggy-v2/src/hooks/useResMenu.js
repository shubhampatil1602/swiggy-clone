import { useContext, useEffect, useState } from 'react';
import { CoOrdinate } from '../contexts/locationContext';

const useResMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  const [offers, setOffers] = useState([]);
  const [ItemCategory, setItemCategory] = useState([]);
  const [topPicks, setTopPicks] = useState([]);
  const {
    coOrdinate: { lat, lng },
  } = useContext(CoOrdinate);

  const SWIGGY_RES_MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=`;

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
  }, [lat, lng]);

  return {
    resMenu,
    offers,
    topPicks,
    ItemCategory,
  };
};

export default useResMenu;
