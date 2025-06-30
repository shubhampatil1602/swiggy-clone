export const ShimmerCard = () => (
  <div className='min-w-[244px] animate-pulse'>
    <div className='relative'>
      <div className='w-full h-[182px] bg-gray-300 rounded-2xl shadow-lg' />
    </div>
    <div className='ml-3 mt-3'>
      <div className='h-6 w-32 bg-gray-300 rounded mb-2' />
      <div className='flex items-center mb-2'>
        <div className='h-5 w-5 bg-gray-300 rounded-full' />
        <div className='h-4 w-20 bg-gray-300 rounded ml-2' />
      </div>
      <div className='h-4 w-40 bg-gray-200 rounded mb-1' />
      <div className='h-4 w-24 bg-gray-200 rounded' />
    </div>
  </div>
);

export const ShimmerDishCard = () => (
  <div className='bg-neutral-200 animate-pulse w-[410px] h-[250px] rounded-3xl'></div>
);

export const ShimmerResSearch = () => (
  <div className='bg-neutral-200 animate-pulse w-[400px] h-[150px] rounded-3xl'></div>
);
