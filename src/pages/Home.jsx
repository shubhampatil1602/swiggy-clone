import Line from '../components/Line';
import Offline from '../components/Offline';
import useOnlineStatus from '../hooks/useOnlineStatus';
import RestaurantMenu from './RestaurantMenu';
import TopRestaurantCarousel from './TopRestaurantCarousel';
import WhatIsOnYourMindCarousel from './WhatIsOnYourMindCarousel';

const Home = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <Offline />;
  }
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
