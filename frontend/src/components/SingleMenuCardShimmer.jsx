const SingleMenuCardShimmer = () => {
  return (
    <div className='cursor-pointer w-[283.3px] relative flex-shrink-0'>
      <div className='w-full'>
        <div className='w-full h-[182px] object-cover rounded-2xl g:h-48 bg-gray-200 object-center' />
      </div>
      <div className='ml-1 mt-3'>
        <p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-200'></p>
        <p className='leading-relaxed mb-3 w-4/5 h-3 animate-pulse bg-blue-200'></p>
        <p className='leading-relaxed mb-3 w-2/4 h-3 animate-pulse bg-gray-200'></p>
        <p className='leading-relaxed mb-3 w-2/5 h-3 animate-pulse bg-gray-200'></p>
      </div>
    </div>
  );
};

export default SingleMenuCardShimmer;
