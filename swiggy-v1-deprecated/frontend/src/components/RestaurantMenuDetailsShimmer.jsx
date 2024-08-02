const RestaurantMenuDetailsShimmer = () => {
  return (
    <div className='p-4 mt-4 border-b border-slate-200 pb-6 w-screen max-w-screen-md cursor-pointer'>
      <div className='h-6 w-3/4 bg-blue-200 rounded-2xl mb-6 mt-3'></div>
      <div className='h-56 bg-gray-200 rounded-2xl w-full mb-9'></div>
      <div className='h-5 w-3/12 bg-gray-200 rounded-2xl mt-4 mb-6'></div>
      <div className='flex gap-4 overflow-hidden w-full'>
        <div className='h-20 w-full bg-gray-200 rounded-2xl mb-2.5'></div>
        <div className='h-20 w-full bg-gray-200 rounded-2xl mb-2.5'></div>
        <div className='h-20 w-full bg-gray-200 rounded-2xl mb-2.5'></div>
      </div>
    </div>
  );
};

export default RestaurantMenuDetailsShimmer;
