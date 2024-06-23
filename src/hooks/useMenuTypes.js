const useMenuTypes = (resInfo) => {
  const restaurantDetail = resInfo?.cards?.[2]?.card?.card?.info;

  const offerInfoWithStyle =
    resInfo?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle;

  const menuVegFilterBadge =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge'
    );

  const menuCarousel =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel'
    );

  const itemCategory =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  const nestedItemCategory =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory'
    );

  const restaurantLicenseInfo =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo'
    );

  return {
    restaurantDetail,
    offerInfoWithStyle,
    menuVegFilterBadge,
    menuCarousel,
    itemCategory,
    nestedItemCategory,
    restaurantLicenseInfo,
  };
};

export default useMenuTypes;
