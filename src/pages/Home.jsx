import Line from '../components/Line';
import RestaurantMenu from './RestaurantMenu';
import TopRestaurantCarousel from './TopRestaurantCarousel';
import WhatIsOnYourMindCarousel from './WhatIsOnYourMindCarousel';

const Home = () => {
  return (
    <>
      <WhatIsOnYourMindCarousel />
      <Line />
      <TopRestaurantCarousel />
      <Line />
      <RestaurantMenu />
    </>
  );
};

export default Home;
