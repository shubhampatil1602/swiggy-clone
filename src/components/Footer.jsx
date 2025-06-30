import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='relative mx-auto flex h-full w-full justify-between border-t border-neutral-100 bg-white px-4 py-3 sm:px-48 md:py-3'>
      <p className='text-xs text-neutral-500'>
        Built with love by{" "}
        <a
          href='https://shubhamspatil.vercel.app'
          target='_blank'
          className='hover:underline'
        >
          Shubham
        </a>
      </p>
      <div className='flex items-center justify-center gap-4'>
        <Link to='https://x.com/shubhamsp1602'>
          <IconBrandX className='size-4 text-neutral-500 hover:text-neutral-700' />
        </Link>
        <Link to='https://www.linkedin.com/in/shubhmpatil/'>
          <IconBrandLinkedin className='size-4 text-neutral-500 hover:text-neutral-700' />
        </Link>
        <Link to='https://github.com/shubhampatil1602'>
          <IconBrandGithub className='size-4 text-neutral-500 hover:text-neutral-700' />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
