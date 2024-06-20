export default function MenuCardShimmer() {
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
}

function SingleMenuCardShimmer() {
  return (
    <div className='cursor-pointer w-[283.3px] relative flex-shrink-0'>
      <div className='w-full'>
        <div className='w-full h-[182px] object-cover rounded-2xl g:h-48 bg-gray-300 object-center' />
      </div>
      <div className='ml-1 mt-3'>
        <p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-300'></p>
        <p className='leading-relaxed mb-3 w-4/5 h-3 animate-pulse bg-blue-300'></p>
        <p className='leading-relaxed mb-3 w-2/4 h-3 animate-pulse bg-gray-300'></p>
        <p className='leading-relaxed mb-3 w-2/5 h-3 animate-pulse bg-gray-300'></p>
      </div>
    </div>
  );
}

export function MenuCardShimmer2() {
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
}

function SingleMenuCardShimmer2() {
  return (
    <div className='cursor-pointer h-[264px] w-[244px] relative flex-shrink-0'>
      <div className='w-full'>
        <div className='w-full h-[162.66px] object-cover rounded-2xl g:h-48 bg-gray-300 object-center' />
      </div>
      <div className='ml-1 mt-3'>
        <p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-300'></p>
        <p className='leading-relaxed mb-3 w-4/5 h-3 animate-pulse bg-blue-300'></p>
        <p className='leading-relaxed mb-3 w-2/4 h-3 animate-pulse bg-gray-300'></p>
        <p className='leading-relaxed mb-3 w-2/5 h-3 animate-pulse bg-gray-300'></p>
      </div>
    </div>
  );
}
