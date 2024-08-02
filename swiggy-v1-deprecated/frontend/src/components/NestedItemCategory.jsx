import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import ItemCategoryAccList from './ItemCategoryAccList';
import { useState } from 'react';

const NestedItemCategory = ({ c }) => {
  // console.log(c);
  const [show, setShow] = useState(null);
  const toggleAccordian = (index) => {
    setShow((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      {/* Header */}
      <div className='py-4 px-3 border-gray-100 border-b-[14px]'>
        <div className='flex justify-between text-lg font-extrabold cursor-pointer mb-2'>
          <span>
            {c?.card?.card?.title} ({c?.card?.card?.categories?.length})
          </span>
        </div>
        {/* Accordian Body - SubTitle */}
        {c?.card?.card?.categories?.map((nestedAcc, index) => (
          <div className='flex flex-col' key={nestedAcc?.title}>
            <span
              onClick={() => toggleAccordian(index)}
              className='py-4 border-b flex justify-between cursor-pointer'
            >
              <span className='font-semibold'>{nestedAcc?.title}</span>
              <span className='flex justify-center items-center mr-4'>
                {show === index ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </span>

            {/* Accordian Body - SubItems */}
            {show === index && <ItemCategoryAccList c={nestedAcc?.itemCards} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedItemCategory;
