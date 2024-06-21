import { BHAU } from '../utils/constants';

const TopShimmer = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-6 h-[320px] mx-auto relative z-0 top-20 mb-3 bg-[#171A29]'>
      <div className='flex justify-center items-center relative'>
        {/* <GiFrenchFries className='relative left-14' color='white' size={32} /> */}
        <img
          src={BHAU}
          alt='load'
          className='absolute left-[3px] h-[90px] rounded-full'
        />

        <div className='animate-spin text-white rounded-full h-24 w-24 border-t-2 border-b-2 border-white'></div>
      </div>
      <div className='flex justify-center'>
        <h1 className='text-2xl text-gray-300 tracking-wider font-light'>
          Looking for great food near you ...
        </h1>
      </div>
    </div>
  );
};

export default TopShimmer;
