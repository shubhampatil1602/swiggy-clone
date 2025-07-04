import { useContext, useEffect, useState } from "react";
import Section from "../components/Section";
import { styles } from "../utils/styles";
import { CoOrdinate } from "../contexts/locationContext";
import { CLOUDINARY_CDN_URL } from "../utils/constants";
import DishesSearch from "../components/DishesSearch";
import RestaurantsSearch from "../components/RestaurantsSearch";
import { ShimmerDishCard, ShimmerResSearch } from "../components/Shimmer/Card";

const Search = () => {
  const {
    coOrdinate: { lat, lng },
  } = useContext(CoOrdinate);

  const [popularCuisines, setPopularCuisines] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [activeFilterBtn, setActiveFilterBtn] = useState("Dishes");
  const [dishes, setDishes] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const filterButtons = ["Restaurants", "Dishes"];
  const handleFilterBtn = (name) => {
    setActiveFilterBtn(activeFilterBtn === name ? activeFilterBtn : name);
  };

  const DISHES = `${
    import.meta.env.VITE_BASE_URL
  }/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchString}&trackingId=08f2a739-4cae-4a2f-d1a2-5613f984502c&submitAction=ENTER&queryUniqueId=4af12564-0fb2-3e59-f51d-4c8688ac79a8`;
  const RESTAURANTS = `${
    import.meta.env.VITE_BASE_URL
  }/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchString}&trackingId=undefined&submitAction=ENTER&queryUniqueId=598d9b3f-20f8-b107-792d-c34527a7f05f&selectedPLTab=RESTAURANT`;
  const fetchPopularCuisines = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/landing/PRE_SEARCH?lat=${lat}&lng=${lng}`
    );
    const data = await response.json();
    setPopularCuisines(data?.data?.cards[1]?.card?.card);
  };

  const fetchDishes = async () => {
    const response = await fetch(DISHES);
    const data = await response.json();

    setDishes(
      data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.filter(
        (data) => data?.card?.card?.info
      )
    );
  };
  const fetchRestaurants = async () => {
    const response = await fetch(RESTAURANTS);
    const data = await response.json();

    setRestaurants(
      data?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
    );
  };

  const popularCuisiinesImages =
    popularCuisines?.gridElements?.infoWithStyle?.info;

  useEffect(() => {
    let id = null;
    id = setTimeout(() => {
      fetchPopularCuisines();
      fetchDishes();
      fetchRestaurants();
    }, 300);
    return () => clearTimeout(id);
  }, [searchString]);
  return (
    <Section>
      <div className='w-full lg:w-[78%] mx-auto h-[48px] my-10'>
        <input
          type='search'
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder='Search for restaurants and food'
          className={`px-[13px] w-full h-full border border-gray-300 shadow rounded outline-none ${styles.flexCenter}`}
        />
      </div>
      {!searchString ? (
        <div className='w-full lg:w-[78%] mx-auto px-4'>
          <h1 className='text-[#3d4152] font-extrabold text-[1.43rem] mb-3'>
            {popularCuisines?.header?.title}
          </h1>
          <div className='overflow-x-auto hide-scrollbar container-carousel'>
            <div className='flex gap-3 transition-transform duration-500'>
              {popularCuisiinesImages && popularCuisiinesImages.length > 0 ? (
                popularCuisiinesImages.map((card) => (
                  <img
                    key={card?.id}
                    src={CLOUDINARY_CDN_URL + card?.imageId}
                    alt={card?.description}
                    className='h-[104.15px] w-[73.29px] cursor-pointer'
                    onClick={() =>
                      setSearchString(card?.action?.link.split("=")[1])
                    }
                  />
                ))
              ) : (
                <div className='h-[105px] w-full rounded-lg bg-neutral-200 animate-pulse'></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='flex flex-wrap gap-3 mt-2 mb-6 w-full lg:w-[78%] mx-auto'>
            {filterButtons.map((btn) => (
              <button
                key={btn}
                className={`${styles.searchFilterBtn} ${
                  activeFilterBtn === btn
                    ? "bg-[#02060cbf] text-[#f0f0f5]"
                    : "bg-white"
                }`}
                onClick={() => handleFilterBtn(btn)}
              >
                {btn}
              </button>
            ))}
          </div>

          <div className='w-full lg:w-[78%] mx-auto justify-center flex gap-x-3.5 gap-y-5 flex-wrap py-6 rounded-xl'>
            {activeFilterBtn === "Dishes" ? (
              dishes && dishes.length > 0 ? (
                dishes
                  ?.slice(0, 20)
                  .map((dish) => (
                    <DishesSearch
                      key={dish?.card?.card?.info?.id}
                      dish={dish}
                    />
                  ))
              ) : (
                <div className='flex gap-6'>
                  <ShimmerDishCard />
                  <ShimmerDishCard />
                </div>
              )
            ) : restaurants && restaurants.length > 0 ? (
              restaurants
                ?.slice(0, 20)
                ?.map((dish) => (
                  <RestaurantsSearch
                    key={dish?.card?.card?.info?.id}
                    dish={dish}
                  />
                ))
            ) : (
              <div className='flex gap-6'>
                <ShimmerResSearch />
                <ShimmerResSearch />
              </div>
            )}
          </div>
        </>
      )}
    </Section>
  );
};

export default Search;
