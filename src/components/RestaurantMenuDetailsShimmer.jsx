const RestaurantMenuDetailsShimmer = () => {
  return (
    <div className='p-4 mt-4 border-b border-slate-200 pb-6 w-screen max-w-screen-md cursor-pointer'>
      <div className='flex'>
        <div className='h-4 bg-gray-200 rounded-full w-48 mb-9'></div>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
        <div className='flex justify-center flex-col pl-2'></div>
        <div className='pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col'>
          <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
        </div>
      </div>
      <div className='text-xl font-semibold pt-2'>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
      </div>
      <div className='text-md font-thin'>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
      </div>
      <div className='text-slate-500 text-sm font-thin pt-4'>
        <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
      </div>
    </div>
  );
};

export default RestaurantMenuDetailsShimmer;
