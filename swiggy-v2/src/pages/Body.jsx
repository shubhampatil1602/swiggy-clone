import WhatIsOnTourMind from './WhatIsOnTourMind';
import Section from '../components/Section';
import TopRestaurantChains from './TopRestaurantChains';
import useFetch from '../hooks/useFetch';
import ResWithOnlineFood from './ResWithOnlineFood';
import LocationUnserviceable from '../components/LocationUnserviceable';

const Body = () => {
  const { data } = useFetch();
  if (
    data?.cards[0]?.card?.card['@type'] ===
    'type.googleapis.com/swiggy.seo.widgets.v1.SwiggyNotPresent'
  ) {
    return <LocationUnserviceable title={data?.cards[0]?.card?.card?.title} />;
  }
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
