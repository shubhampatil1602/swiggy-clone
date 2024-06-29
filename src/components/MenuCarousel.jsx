import { CLOUDINARY_TOP_PICKS_URL } from '../utils/constants';

const MenuCarousel = ({ c }) => {
  return (
    <div className='flex-shrink-0 flex gap-2 pb-8'>
      {c?.carousel?.map((c) => (
        <span key={c?.bannerId}>
          <div className='h-[302px] w-[294px] border rounded-2xl '>
            <img
              src={CLOUDINARY_TOP_PICKS_URL + c?.creativeId}
              alt='top picks'
            />
          </div>
        </span>
      ))}
    </div>
  );
};

export default MenuCarousel;
