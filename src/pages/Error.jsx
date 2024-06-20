import { Link, useRouteError } from 'react-router-dom';
import { ERROR_MEME } from '../utils/constants';
import Header from './Header';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <Header />
      <div className='flex flex-col gap-6 justify-center items-center relative z-0 top-36'>
        <Link to={'/'} className='flex items-center justify-center'>
          <img src={ERROR_MEME} className='shadow-2xl w-2/3 ' alt='error' />
        </Link>
        <div>
          <p className='font-semibold text-lg'>
            Status code: {err.status} {err.statusText}
          </p>
          <p className='font-semibold text-lg'>{err.data}</p>
        </div>
      </div>
    </>
  );
};

export default Error;
