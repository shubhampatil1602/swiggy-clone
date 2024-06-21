import SingleMenuCardShimmer from './SingleMenuCardShimmer';

const MenuCardShimmer = () => {
  return (
    <div className='w-3/4 mx-auto mt-8'>
      <div className='py-4 flex items-center mt-8'>
        <p className='leading-relaxed mb-3 w-2/3 h-6 animate-pulse bg-gray-400 hidden'></p>
      </div>
      <div className='flex gap-4 overflow-hidden pl-4 mt-8'>
        <SingleMenuCardShimmer />
        <SingleMenuCardShimmer />
        <SingleMenuCardShimmer />
        <SingleMenuCardShimmer />
      </div>
    </div>
  );
};

export default MenuCardShimmer;
