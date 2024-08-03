import WhatIsOnTourMind from './WhatIsOnTourMind';
import Section from '../components/Section';
import TopRestaurantChains from './TopRestaurantChains';
import useFetch from '../hooks/useFetch';
import ResWithOnlineFood from './ResWithOnlineFood';

const Body = () => {
  const { data } = useFetch();
  return (
    <Section>
      {data?.cards[0]?.card?.card?.header?.title.includes('mind?') && (
        <WhatIsOnTourMind />
      )}
      <TopRestaurantChains />
      <ResWithOnlineFood />
    </Section>
  );
};

export default Body;
