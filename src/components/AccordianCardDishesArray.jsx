import { AccordianCardDishes } from './AccordianCardDishes';

export const AccordianCardDishesArray = ({ menu }) => {
  return (
    <>
      {menu?.map((m) => (
        <AccordianCardDishes key={m?.card?.info?.id} details={m} />
      ))}
    </>
  );
};
