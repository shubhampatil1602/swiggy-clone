import Section from './Section';

const LocationUnserviceable = ({ title }) => {
  return (
    <Section>
      <div className='w-[380px] h-screen mx-auto'>
        <div className='flex justify-center items-center px-10 pt-20 pb-16'>
          <img
            src={
              'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png'
            }
            className='h-[238px] w-[238px]'
            alt='LocationUnserviceable'
          />
        </div>
        <div className='text-center w-[380px] text-[#676A6D]'>
          <h1 className='text-xl font-bold text-[#020603eb]'>{title}</h1>
          <p className='text-base font-light p-2'>
            We don’t have any services here till now. Try changing location.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default LocationUnserviceable;
