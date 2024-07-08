import { OFFLINE_MEME } from '../utils/constants';

const Offline = () => {
  return (
    <div className='flex items-center w-3/4 mx-auto relative z-0 top-28 py-10'>
      <img src={OFFLINE_MEME} alt={'offline'} />
    </div>
  );
};

export default Offline;
