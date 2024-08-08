import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import ItemCatAccData from './ItemCatAccData';

const ItemCatAcc = ({ card }) => {
  const [openSingleAcc, setOpenSingleAcc] = useState(
    card['@type'] ? true : false
  );

  const handleOpenSingleAcc = () => {
    setOpenSingleAcc((openSingleAcc) => !openSingleAcc);
  };
  if (card?.itemCards) {
    return (
      <>
        <div
          onClick={handleOpenSingleAcc}
          className={`flex items-center justify-between cursor-pointer p-4 ${
            card['@type'] ? 'border-t-[14px]' : 'border-b-2'
          } border-[#F2F2F3]`}
        >
          <h2
            className={`${
              card['@type'] ? 'text-lg font-bold' : 'text-base font-semibold'
            } text-gray-900`}
          >
            {card?.title} ({card?.itemCards?.length})
          </h2>
          {openSingleAcc ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        {card?.itemCards?.map((itemCard, index) => {
          return (
            openSingleAcc && (
              <ItemCatAccData
                key={itemCard?.card?.info?.id}
                index={index === card?.itemCards?.length - 1}
                info={itemCard?.card?.info}
              />
            )
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <div className='flex items-center justify-between cursor-pointer p-4 border-t-[14px] border-[#F2F2F3]'>
          <h2 className='text-lg font-bold text-gray-900'>{card?.title}</h2>
        </div>

        {card?.categories?.map((category) => (
          <ItemCatAcc key={category?.title} card={category} />
        ))}
      </>
    );
  }
};

export default ItemCatAcc;
