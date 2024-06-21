export const AboutShimmer = () => {
  return (
    <div className='py-12'>
      <div className='flex flex-col gap-3 max-w-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col justify-center mb-4'>
          <div className='w-full flex justify-center'>
            <div className='rounded-full h-40 w-40 animate-pulse shadow-xl object-cover g:h-48 bg-gray-300 object-center' />
          </div>
        </div>
        <div className='mt-3 w-56 flex justify-center items-center flex-col gap-2 m-auto'>
          <p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-300'></p>
          <p className='leading-relaxed mb-3 w-4/5 h-3 animate-pulse bg-blue-300'></p>
          <p className='leading-relaxed mb-3 w-2/4 h-3 animate-pulse bg-gray-300'></p>
          <p className='leading-relaxed mb-3 w-2/5 h-3 animate-pulse bg-gray-300'></p>
        </div>
      </div>
    </div>
  );
};
