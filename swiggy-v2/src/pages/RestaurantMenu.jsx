import { useParams } from 'react-router-dom';
import useResMenu from '../hooks/useResMenu';
import DisplayCoupon from '../components/DisplayCoupon';
import TopPicks from '../components/TopPicks';
import ItemCatAcc from '../components/ItemCatAcc';
import MenuPath from '../components/MenuPath';
import InfoBanner from '../components/InfoBanner';
import ResMenuAndSearchText from '../components/ResMenuAndSearchText';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resMenu, offers, topPicks, ItemCategory } = useResMenu(
    resId?.split('-').at(-1)
  );

  const info = resMenu?.data?.cards[2]?.card?.card?.info;

  return (
    <section className='w-[55%] mx-auto'>
      <MenuPath info={info} />
      {/* Restaurant Name */}
      <h1 className='font-bold text-2xl px-4 py-3'>{info?.name}</h1>
      {/* Info Banner */}
      <InfoBanner info={info} />
      {/* Deals for you */}
      <div className='px-3 my-2'>
        <h2 className='font-bold text-xl py-2 mt-6'>{'Deals for you'}</h2>
        <div className='overflow-x-auto hide-scrollbar container-carousel'>
          <div className='flex gap-3 transition-transform duration-500'>
            {offers?.map((offer) => (
              <DisplayCoupon key={offer?.info?.offerIds[0]} {...offer?.info} />
            ))}
          </div>
        </div>
      </div>
      {/* MENU */}
      <ResMenuAndSearchText />
      {/* Top Picks */}
      {topPicks?.length != 0 && (
        <div className='px-3'>
          <h2 className='font-bold text-xl py-2 mt-4 mb-2'>
            {topPicks[0]?.card?.card?.title}
          </h2>
          <div className='overflow-x-auto hide-scrollbar container-carousel'>
            <div className='flex gap-3 transition-transform duration-500'>
              {topPicks[0]?.card?.card?.carousel?.map((topPick) => (
                <TopPicks
                  key={topPick?.dish?.info?.id}
                  creativeId={topPick?.creativeId}
                  dish={topPick?.dish?.info}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Accordians */}
      <div>
        {ItemCategory?.map(({ card: { card } }) => (
          <ItemCatAcc key={card?.title} card={card} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantMenu;
