import ClassAbout from './ClassAbout';

const About = () => {
  return (
    <div className='w-3/4 mx-auto relative z-0 top-20 h-[90vh]'>
      <div className='flex justify-between p-4'>
        <h1 className='font-bold text-2xl'>About</h1>
      </div>
      <div className='flex flex-col gap-4'>
        {/* <FunctionalAbout /> */}
        <ClassAbout />
      </div>
    </div>
  );
};

export default About;
