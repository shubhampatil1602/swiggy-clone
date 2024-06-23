import ItemCategoryAccList from './ItemCategoryAccList';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const ItemCategoryAccordian = ({ c, show, setShow }) => {
  // const [show, setShow] = useState(true);

  return (
    <div>
      {/* Header */}
      <div className='py-4 px-3 border-gray-100 border-b-[14px]'>
        <div
          className='flex justify-between text-lg font-extrabold cursor-pointer'
          onClick={() => setShow()}
        >
          <span>
            {c?.title} ({c?.itemCards?.length})
          </span>
          <span className='flex justify-center items-center mr-4'>
            {show ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </div>
        {/* Accordian Body */}
        {show && <ItemCategoryAccList c={c?.itemCards} />}
      </div>
    </div>
  );
};

export default ItemCategoryAccordian;
