import { WHAT_IS_IN_YOUR_MIND } from '../utils/constants';

const WhatIsOnYourMind = ({ image }) => {
  return (
    <div className='flex-shrink-0 cursor-pointer'>
      <img
        src={WHAT_IS_IN_YOUR_MIND + image}
        alt='food'
        className='w-36 h-44'
      />
    </div>
  );
};

export default WhatIsOnYourMind;
