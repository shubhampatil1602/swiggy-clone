import SingleMenuCardShimmer2 from './SingleMenuCardShimmer2';

const MenuCardShimmer2 = () => {
  return (
    <div className='w-3/4 mx-auto mt-10'>
      <div className='py-4 flex flex-col gap-2 justify-center items-center mt-8 mb-4'>
        <p className='leading-relaxed mb-3 w-2/3 h-6 animate-pulse bg-blue-300'></p>
      </div>
      <div className='flex gap-8 justify-center flex-wrap'>
        <SingleMenuCardShimmer2 />
        <SingleMenuCardShimmer2 />
        <SingleMenuCardShimmer2 />
        <SingleMenuCardShimmer2 />
      </div>
    </div>
  );
};

export default MenuCardShimmer2;
